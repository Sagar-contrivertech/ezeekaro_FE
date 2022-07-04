// import React from 'react'
// import React from 'react'
import React, { useEffect, useState } from "react";
import axios from '../../Axios/axios'
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import '../tables/VendorTables.css'
// import {EditIcon} from '@mui/icons-material';
// components
import PageTitle from "../../components/PageTitle/PageTitle";
import { Chip, Divider, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import swal from "sweetalert";

const Salary = () => {
    const daysofmonth = [31 , 28 , 31 , 30 , 31 , 30 , 31 , 31, 30 , 31 , 30 ,31];
    const [salarydata , setsalarydata] = useState([]);
    const [month , setMonth] = useState("");
    const [Attendance , setAttendance] = useState([]);
    const [days , setdays] = useState();
    const [Name , setName] = useState("");
    const [Email , setEmail] = useState("");
    const [Role , setRole] = useState("");
    const [Status , setStatus] = useState("");
    const [Permission , setPermission] = useState("");
    const [Salary , setSalary] = useState();
    const [open, setOpen] = useState(false);
    const token = localStorage.getItem('id_token');


    // console.log("month" , month)
    // console.log("days" , days)
    // console.log("days of month " , daysofmonth[1])

    const data = async () => {
        let url = "/Salary/GetSalary";
        try {
            let response = await axios.get(url , {
                method: 'get',
                headers: {
                    Authorization: `${token}`
                },
            })
            console.log(response.data.salarys);
            const resdata = response.data.salarys;
            // const newresdata = resdata.filter((ele , ind) => {

            //     if (ele.Role === "Delivery" && ele.Status === "inactive") {
            //         return ele
            //     }
                
            // })
            // setUserData(response.data.FindUsers)
            console.log(resdata)
            setsalarydata(resdata)
        } catch (error) {
            console.log(error);
        }
    }

    const handleOpen = (id) => {
        console.log(salarydata , "salarydata");
        console.log(id , "salarydata id");
        // setUserId(id)
        axios.get(`/Salary/GetSalaryById/${id._id}`, {
            headers: {
                Authorization: `${token}`
            }
        }).then((res) => {
            setName(res.data.salarys[0].UserId.Name)
            setEmail(res.data.salarys[0].UserId.Email)
            setStatus(res.data.salarys[0].UserId.Status)
            setPermission(res.data.salarys[0].UserId.Permission)
            setRole(res.data.salarys[0].UserId.Role)
            setSalary(res.data.salarys[0].Salary)
            AttendanceData(res.data.salarys[0].UserId._id)
        }).catch((err) => {
            console.log(err)
        })
    };

    const AttendanceData = (id) => {
        if (id) {
            
            axios.get(`/Attendance/GetAttendanceById/${id}` , {
                headers: {
                Authorization: `${token}`
            }
        }).then((res) => {
            setAttendance(res.data.gettime)
            calculateSalary(res.data.gettime[0].UserId)
            // console.log(res , "attendance data");
        }).catch((err) => {
            console.log("err data attendance" , err)
        })
    }
    }

    const calculateSalary = (id) => {
        console.log("calculatesalary" , id)
        if (id) {
        axios.post(`/Salary/CalculateSalary/${id}/${days}` , {
            headers: {
                Authorization: `${token}`
            }
        }).then((res) => {
            console.log(res , "attendance data" );
        }).catch((err) => {
            console.log("err data attendance calculate" , err)
        })
    }
    }

    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        height: 500,
        p: 4,
    };

    useEffect(() => {
        data()
    } , [])

    useEffect(() => {
        AttendanceData()
    } , [month])
    

    

    const column = [

        {
            name: "UserId.Name",
            options: {
                filter: true,
            },
            label : "Name"
        },
        {
            name: "UserId.Role",
            options: {
                filter: true,
            },
            label : "Department"
        },
        {
            name: "Salary",
            options: {
                filter: true,
            },
            label : "Salary"
        },
        {
            name: "Edit",
            options: {
                filter: true,
                sort: false,
                empty: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    // console.log(tableMeta , "current data");
                    return (
                        <>
                            <Button  variant="contained" onClick={(e) => { 
                                setOpen(true);
                                handleOpen(salarydata[tableMeta.rowIndex].UserId) 
                            }}>View Detail</Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Divider>
                                        <Chip label="View & Edit DETAIL" />
                                    </Divider>
                                    <br />
                                    <div className="container">
                                        <div className="row mb-5">
                                            <div className="col-6">
                                                <Typography>
                                                    Name:
                                                </Typography>
                                            </div>
                                            <div className="col-6">
                                                <Typography>
                                                    {
                                                        Name ? Name : ""
                                                    }
                                                </Typography>
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                            <div className="col-6">
                                                <Typography>
                                                    Email:
                                                </Typography>
                                            </div>
                                            <div className="col-6">
                                                <Typography>
                                                    {
                                                        Email ? Email : ""
                                                    }
                                                </Typography>
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                            <div className="col-6">
                                                <Typography>
                                                    Calender:
                                                </Typography>
                                            </div>
                                            <div className="col-6">
                                                <Typography>
                                                    <input type="month" value={month} onChange={(e) => {
                                                        setMonth(e.target.value.split("-")[1])
                                                        // console.log()
                                                        console.log(parseInt(e.target.value.split("-")[1]));
                                                        console.log("hdkd")
                                                        setdays(daysofmonth[parseInt(e.target.value.split("-")[1]) - 1])
                                                    }
                                                    } />
                                                </Typography>
                                            </div>
                                        </div>
                                        {/* <div className="row mb-5">
                                            <div className="col-6">
                                                <Typography>
                                                    Role:
                                                </Typography>
                                            </div>
                                            <div className="col-6">
                                                <Typography>
                                                    {
                                                        Role ? Role : ""
                                                    }
                                                </Typography>
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                            <div className="col-6">
                                                <Typography>
                                                    Permission:
                                                </Typography>
                                            </div>
                                            <div className="col-6">
                                                <Typography>
                                                    {
                                                        Permission ? Permission : ""
                                                    }
                                                </Typography>
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                            <div className="col-6">
                                                <Typography>
                                                    Status:
                                                </Typography>
                                            </div>
                                            <div className="col-6">
                                                <Typography>
                                                    {
                                                        Status ? Status : ""
                                                    }
                                                </Typography>
                                            </div>
                                        </div> */}
                                        <div className="row mb-5">
                                            <div className="col-6">
                                                <Typography>
                                                    Salary:
                                                </Typography>
                                            </div>
                                            <div className="col-6">
                                                <Typography>
                                                    {
                                                        Salary ? Salary : ""
                                                    }
                                                </Typography>
                                            </div>
                                        </div>
                                        
                                        <div className="text-center">
                                        {/* onClick={(e) => { handleSubmit(e) }} */}
                                            <Button variant="contained" >Save</Button>
                                        </div>
                                    </div>
                                </Box>
                            </Modal>
                        </>
                    );
                }
            }
        },
    ]
  return (
    <>
        <PageTitle title="Salary " />
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <MUIDataTable
                        title="User List"
                        data={salarydata}
                        columns={column}
                        options={{
                            filterType: "checkbox",
                        }}
                    />
                </Grid>
            </Grid>
    </>
  )
}

export default Salary