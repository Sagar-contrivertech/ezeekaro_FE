import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import axios from '../../Axios/axios'
// components
import PageTitle from "../../components/PageTitle/PageTitle";
import UserTableModal from "../models/UserTableModal";
// data
export default function VendorTables() {
    const [userData, setUserData] = useState([])
    const [show , setShow] = useState(false);

    const token = localStorage.getItem('id_token')
    let URL = "/User/GetUsers"

    const openModal = () => {
        console.log(show)
        setShow(true)
        return <UserTableModal show={show} />
    }
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
                        <button onClick={openModal}>
                            View Detail
                        </button>
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