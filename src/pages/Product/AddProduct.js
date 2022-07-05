import Button from '@mui/material/Button';
import React, { useState } from 'react'
import { useEffect } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle'
import axios from '../../Axios/axios'
{/* // { Name , Description , CategoryId , Image , IsFeatured , Quantity , price , IsDiscount , Reviews , IsPromotion , VendorId , CategoryName , VendorName , ExpiryDate , ManufactureDate} */}
function AddProduct() {
    const [Name , setName] = useState("")
    const [Description , setDescription] = useState("");
    const [Image , setImage] = useState("");
    const [IsFeatured , setIsFeatured] = useState("");
    const [Quantity , setQuantity] = useState("");
    const [price , setprice] = useState("");
    const [IsDiscount , setIsDiscount] = useState("");
    const [Reviews , setReviews] = useState("");
    const [IsPromotion , setIsPromotion] = useState("");
    const [CategoryName , setCategoryName] = useState("");
    const [ExpiryDate , setExpiryDate] = useState("");
    const [ManufactureDate , setManufactureDate] = useState("");
    const [VendorId , setVendorId] = useState("");
    const [VendorName , setVendorName] = useState("");
    console.log(IsFeatured , "Isfield featured")

    const [CategoryList, setCategoryList] = useState([])

    const token = localStorage.getItem('id_token')
    
    const categorydata = async () => {
        try {
        let URL = "/Category/GetCategory"
        let response = await axios.post(URL, {
            headers: {
            Authorization: `${token}`
            },
        })
        console.log(response.data , "categorydata");
        CategoryList(response.data)
        } catch (error) {
        console.log(error);
        }
    }
    useEffect(() => {
        categorydata()
    } , [])
    return (
    <>
          <PageTitle title="Add Product" />

        <div className="container mt-3">
            <div className="row">
              <div className="col-sm-4 mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  ></input>
              </div>
              <div className="col-sm-4 mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Description
                </label>
                <input
                  type="text"
                    value={Description}
                    onChange={(e) => setDescription(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  ></input>
              </div>
              <div className="col-sm-4 mb-3">
                <label for="exampleInputEmail1" class="form-label">
                    CategoryId
                </label>
                <input
                  type="text"
                  //   value={Name}
                  //   onChange={(e) => setName(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                ></input>
              </div>
              <div className="col-sm-4 mb-3">
                <label for="exampleInputEmail1" class="form-label">
                Image
                </label>
                <input
                  type="text"
                  value={Image}
                  onChange={(e) => setImage(e.target.value)}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                ></input>
              </div>
              <div className="col-sm-4 mb-3">
                <label for="exampleInputEmail1" class="form-label">
                IsFeatured
                </label>
                <br />
                <select style={{"width": "100%" , "padding": "8px" , "textTransform": "capitalize" , "border": "0px" , 
                "border" : "1px solid #ced4da"}} name="" id="" value={IsFeatured} onChange={(e) => setIsFeatured(e.target.value)}>
                    <option value="true">true</option>
                    <option value="false">false</option>
                </select>
              </div>
              <div className="col-sm-4 mb-3">
                <label for="exampleInputEmail1" class="form-label">
                Quantity
                </label>
                <input
                  type="text"
                  value={Quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                ></input>
              </div>
              <div className="col-sm-4 mb-3">
                <label for="exampleInputEmail1" class="form-label">
                price
                </label>
                <input
                  type="text"
                    value={price}
                    onChange={(e) => setprice(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                ></input>
              </div>
              <div className="col-sm-4 mb-3">
                <label for="exampleInputEmail1" class="form-label">
                IsDiscount
                </label>
                <br />
                <select style={{"width": "100%" , "padding": "8px" , "textTransform": "capitalize" , "border": "0px" , 
                "border" : "1px solid #ced4da"}} name="" id="" value={IsDiscount} onChange={(e) => setIsDiscount(e.target.value)}>
                    <option value="true">true</option>
                    <option value="false">false</option>
                </select>
              </div>
              <div className="col-sm-4 mb-3">
                <label for="exampleInputEmail1" class="form-label">
                Reviews
                </label>
                <input
                  type="text"
                    value={Reviews}
                    onChange={(e) => setReviews(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  ></input>
              </div>
              <div className="col-sm-4 mb-3">
                <label for="exampleInputEmail1" class="form-label">
                IsPromotion
                </label>
                <select style={{"width": "100%" , "padding": "8px" , "textTransform": "capitalize" , "border": "0px" , 
                "border" : "1px solid #ced4da"}} name="" id="" value={IsPromotion} onChange={(e) => setIsPromotion(e.target.value)}>
                    <option value="true">true</option>
                    <option value="false" default>false</option>
                </select>
                
              </div>
              <div className="col-sm-4 mb-3">
                <label for="exampleInputEmail1" class="form-label">
                VendorId
                </label>
                <input
                  type="text"
                    value={VendorId}
                    onChange={(e) => setVendorId(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  ></input>
              </div>
              <div className="col-sm-4 mb-3">
                <label for="exampleInputEmail1" class="form-label">
                CategoryName
                </label>
                <input
                  type="text"
                    value={CategoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  ></input>
              </div>
              <div className="col-sm-4 mb-3">
                <label for="exampleInputEmail1" class="form-label">
                VendorName
                </label>
                <input
                  type="text"
                  value={VendorName}
                  onChange={(e) => setVendorName(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                ></input>
              </div>
              <div className="col-sm-4 mb-3">
                <label for="exampleInputEmail1" class="form-label">
                ExpiryDate
                </label>
                <input
                  type="text"
                  value={ExpiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  ></input>
              </div>
              <div className="col-sm-4 mb-3">
                <label for="exampleInputEmail1" class="form-label">
                ManufactureDate
                </label>
                <input
                  type="text"
                    value={ManufactureDate}
                  onChange={(e) => setManufactureDate(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                ></input>
              </div>

              <div className="row mb-3 mt-3 d-flex justify-content-center align-items-center">
              <Button className="col-2" variant="contained" >Submit</Button>
            </div>

            </div>
        </div>
    </>
  )
}

export default AddProduct