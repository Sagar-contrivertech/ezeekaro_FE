import React, { useEffect, useState } from "react";
import axios from '../../Axios/axios'
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './VendorTables.css'
// import {EditIcon} from '@mui/icons-material';
// components
import PageTitle from "../../components/PageTitle/PageTitle";
import { Chip, Divider, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import swal from "sweetalert";
// data
export default function VendorTables() {
    const [userData, setUserData] = useState([]);
    const [viewUserData, setviewUserData] = useState();
    const [show, setShow] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [contactEdit, setcontactEdit] = useState(false);
    const [contactdata, setcontactdata] = useState('');
    const [status, setStatus] = useState('');
    const [role, setRole] = useState('');
    const [statusEdit, setStatusEdit] = useState(false);
    const [roleEdit, setRoleEdit] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);

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
        setUserId(id)
        axios.get(`/User/getUserById/${id}`, {
            headers: {
                Authorization: `${token}`
            }
        }).then((res) => {
            setviewUserData(res.data.getUser)
            setcontactdata(res.data.getUser.Contact)
            setStatus(res.data.getUser.Status)
            setRole(res.data.getUser.Role)
        }).catch((err) => {
            console.log(err)
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let editUrl = `/User/updateuser/${userId}`
        let body = {
            Status: status,
            Contact: contactdata,
            Role: role
        }
        axios.put(editUrl, body, {
            headers: {
                Authorization: `${token}`
            }
        }).then((res) => {
            setStatusEdit(false)
            setcontactEdit(false)
            setRoleEdit(false)
            swal("Users Is Register Sucesfullt");
            setOpen(false)
            // Refresh the effect by incrementing 1
            setRefreshKey(oldKey => oldKey + 1)
        }).catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        data()
    }, [refreshKey])

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
                    console.log(viewUserData);
                    return (
                        <>
                            <Button onClick={(e) => { handleOpen(userData[tableMeta.rowIndex]._id) }} variant="contained" >View Detail</Button>
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
                                                        viewUserData && viewUserData.Name
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
                                                        viewUserData && viewUserData.Email
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
                                                    {
                                                        contactEdit === true ? (
                                                            <>
                                                                <TextField id="standard-basic" variant="standard"
                                                                    type="tel"
                                                                    value={contactdata}
                                                                    onChange={(e) => setcontactdata(e.target.value)}
                                                                />
                                                            </>
                                                        ) : (
                                                            <>
                                                                {viewUserData && viewUserData.Contact}
                                                                <EditIcon onClick={() => { setcontactEdit(true) }} />
                                                            </>
                                                        )
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
                                                        statusEdit === true ? (
                                                            <>
                                                                <TextField id="standard-basic" variant="standard"
                                                                    type="tel"
                                                                    value={status}
                                                                    onChange={(e) => setStatus(e.target.value)}
                                                                />

                                                            </>
                                                        ) : (
                                                            <>
                                                                {viewUserData && viewUserData.Status}
                                                                <EditIcon onClick={() => { setStatusEdit(true) }} />
                                                            </>
                                                        )
                                                    }
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
                                                        roleEdit === true ? (
                                                            <>
                                                                <TextField id="standard-basic" variant="standard"
                                                                    type="tel"
                                                                    value={role}
                                                                    onChange={(e) => setRole(e.target.value)}
                                                                />
                                                            </>
                                                        ) : (
                                                            <>
                                                                {viewUserData && viewUserData.Role}
                                                                <EditIcon onClick={() => { setRoleEdit(true) }} />
                                                            </>
                                                        )
                                                    }
                                                </Typography>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <Button variant="contained" onClick={(e) => { handleSubmit(e) }}>Save</Button>
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
