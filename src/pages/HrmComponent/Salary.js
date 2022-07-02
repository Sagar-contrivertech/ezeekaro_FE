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
    const [salarydata , setsalarydata] = useState([]);

    const token = localStorage.getItem('id_token');
    let url = "/Salary/GetSalary";
    const data = async () => {
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

    useEffect(() => {
        data()
    } , [])

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
                    // console.log(viewUserData);
                    return (
                        <>
                            <Button  variant="contained" >View Detail</Button>
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