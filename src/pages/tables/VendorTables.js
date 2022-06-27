import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import axios from '../../Axios/axios'
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
    const [userData, setUserData] = useState([])
    const [show, setShow] = useState(false);
    const [open, setOpen] = React.useState(false);

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

    const handleOpen = (e, id) => {
        setOpen(true)
        console.log(id);

    };
    useEffect(() => {
        data()
    }, [])

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
                                            <Button onClick={(e) => { handleOpen() }} variant="contained" >View Detail</Button>
                                        {/* </div> */}
                                        <Modal
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>
                                                <Divider>
                                                    <Chip label="VIEW DETAIL" />
                                                </Divider>

                                                <Typography className="d-flex justify-content-around " >
                                                    <Typography>
                                                        Name:
                                                    </Typography>
                                                    <Typography>
                                                        Sonam Jha
                                                    </Typography>
                                                </Typography>
                                                <br />
                                                <Typography className="d-flex justify-content-around " >
                                                    <Typography>
                                                        Email:
                                                    </Typography>
                                                    <Typography>
                                                        Sonam Jha
                                                    </Typography>
                                                </Typography>
                                                <br />
                                                <Typography className="d-flex justify-content-around " >
                                                    <Typography>
                                                        Phone:
                                                    </Typography>
                                                    <Typography>
                                                        Sonam Jha
                                                    </Typography>
                                                </Typography>
                                                <br />
                                                <Typography className="d-flex justify-content-around " >
                                                    <Typography>
                                                        Status:
                                                    </Typography>
                                                    <Typography>
                                                        Sonam Jha
                                                    </Typography>
                                                </Typography>
                                                <br />
                                                <Typography className="d-flex justify-content-around " >
                                                    <Typography>
                                                        Roles:
                                                    </Typography>
                                                    <Typography>
                                                        Sonam Jha
                                                    </Typography>
                                                </Typography>
                                                <br />
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
