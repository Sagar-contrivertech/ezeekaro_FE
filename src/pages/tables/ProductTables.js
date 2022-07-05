import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import axios from '../../Axios/axios'
// components
import PageTitle from "../../components/PageTitle/PageTitle";
import { Link } from "react-router-dom";
// data
export default function ProductTables() {

  const [productData, setProductData] = useState([])

  const token = localStorage.getItem('id_token')
  let URL = "/Product/GetProduct"

  const data = async () => {
    try {
      let response = await axios.get(URL, {
        method: 'POST',
        headers: {
          Authorization: `${token}`
        },
      })
      console.log(response.data.products);
      setProductData(response.data.products)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    data()
  }, [])

  const btnstyle = {
    "padding" : "10px",
    "marginBottom" : "10px !important",
    "backgroundColor": "#536DFE",
    "color": "#fff",
    "textDecoration" : "none"
  }

  return (
    <>
      <PageTitle title="Product Data" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Link to="/app/AddProduct"  style={btnstyle}> Add Product </Link>
          <MUIDataTable
            className="mt-5"
            title="Product List"
            data={productData}
            columns={["Name", "Description", "CategoryName", "price", "VendorName"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
