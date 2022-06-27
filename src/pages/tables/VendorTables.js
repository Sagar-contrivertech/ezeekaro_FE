import React, { useEffect, useState } from "react";
import axios from '../../Axios/axios'
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './VendorTables.css'
// components
import PageTitle from "../../components/PageTitle/PageTitle";
import { Chip, Divider, TextField } from "@mui/material";
// data
export default function VendorTables() {
    const [userData, setUserData] = useState([]);
    const [viewUserData , setviewUserData] = useState();
    const [show, setShow] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [contactEdit , setcontactEdit] = useState(false);
    const [contactdata , setcontactdata] = useState(viewUserData ? viewUserData.Contact : "");

    const handleClose = () => setOpen(false);
    const token = localStorage.getItem('id_token')
    let URL = "/User/GetUsers"

    const openModal = () => {
        console.log(show)
        setShow(true)
    }

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
    const [userId, setUserId] = useState('')
    // const handleClose = () => setShow(false);
    const data = async () => {
        try {
            let response = await axios.get(URL, {
                method: 'POST',
                headers: {
                    Authorization: `${token}`
                },
            })
            console.log(response.data.FindUsers);
            setUserData(response.data.FindUsers)
        } catch (error) {
            console.log(error);
        }
    }

    const handleOpen = (id) => {
        setOpen(true);
        console.log(id);
        axios.get(`/User/getUserById/${id}` , {
            headers : {
                Authorization: `${token}`
            }
        }).then((res) => {
            setviewUserData(res.data.getUser)
        }).catch((err) => {
            console.log(err)
        })
        // /getUserById/:id

    };
    useEffect(() => {
        data()
    }, [])

    const handleonedit = () => {
        setcontactEdit(true)
    }

    const column = [

        {
            name: "Name",
            options: {
                filter: true,
            }
        },
        {
            name: "Email",
            options: {
                filter: true,
            }
        }, {
            name: "Contact",
            options: {
                filter: true,
            }
        }, {
            name: "Role",
            options: {
                filter: true,
            }
        }, {
            name: "Status",
            options: {
                filter: true,
            }
        },
        {
            name: "Edit",
            options: {
                filter: true,
                sort: false,
                empty: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <>
                            {/* {
                                userData && userData.map((users, index) => (
                                    <>
                                        <div key={users._id}> */}
                                        {/* <Button onClick={() => console.log(tableMeta , userData[tableMeta.rowIndex]._id)}>
                                            View Detail
                                        </Button> */}
                                            <Button onClick={(e) => { handleOpen(userData[tableMeta.rowIndex]._id)  }} variant="contained" >View Detail</Button>
                                        {/* </div> */}
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
                                                            viewUserData ? viewUserData.Name : "Sonam "
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
                                                            viewUserData ? viewUserData.Email : "Sonam "
                                                        }
                                                    </Typography>
                                                    </div>
                                                </div>
                                                <div className="row mb-5">
                                                    <div className="col-6">
                                                    <Typography>
                                                        Phone:
                                                    </Typography>
                                                    </div>
                                                    <div className="col-6">
                                                    <Typography>
                                                        {/* {
                                                            viewUserData ? viewUserData.Contact : "Sonam "
                                                        } */}
                                                        {
                                                            contactEdit === true ? (
                                                                <>
                                                                    <input
                                                                        type="text"
                                                                        value={contactdata}
                                                                        onChange={(e) => setcontactdata(e.target.value)}
                                                                        class="form-control"
                                                                        id="exampleInputEmail1"
                                                                        aria-describedby="emailHelp"
                                                                        ></input>
                                                                </>
                                                            ) : viewUserData ? contactdata : "Sonam "
                                                        }
                                                        <Button variant="contained" className="mx-3" onClick={handleonedit} >Edit</Button>
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
                                                            viewUserData ? viewUserData.Status : "Sonam "
                                                        }
                                                        <Button variant="contained" className="mx-3" >Edit</Button>
                                                    </Typography>
                                                    </div>
                                                </div>
                                                <div className="row mb-5">
                                                    <div className="col-6">
                                                    <Typography>
                                                    Roles:
                                                    </Typography>
                                                    </div>
                                                    <div className="col-6">
                                                    <Typography>
                                                        {
                                                            viewUserData ? viewUserData.Role : "Sonam "
                                                        }
                                                        <Button variant="contained" className="mx-3" >Edit</Button>
                                                    </Typography>
                                                    </div>
                                                </div>
                                            </div>
                                            </Box>
                                        </Modal>
                                    {/* </>
                                )
                                )
                            } */}
                        </>
                    );
                }
            }
        },
    ]

    return (
        <>
            <PageTitle title="User Data" />
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <MUIDataTable
                        title="User List"
                        data={userData}
                        columns={column}
                        options={{
                            filterType: "checkbox",
                        }}
                    />
                </Grid>
            </Grid>
        </>
    );
}
