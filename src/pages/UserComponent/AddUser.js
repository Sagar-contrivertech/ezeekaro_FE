import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import PageTitle from "../../components/PageTitle/PageTitle";

const AddUser = () => {
    // Name , Email , Contact , Password , Pincode , Pancard , Aadharcard , Address , State , City , Vehical_Modal , Bike_Register_No , Medical_Certificate , Puc_Certificate , Bike_Insurance_Policy , Vehicle_image , Role , Status
    const [Name , setName] = React.useState("");
    const [Email , setEmail] = React.useState("");
    const [Contact , setContact] = React.useState("");
    const [Password , setPassword] = React.useState("");
    const [Pincode , setPincode] = React.useState("");
    const [Pancard , setPancard] = React.useState("");
    const [Aadharcard , setAadharcard] = React.useState("");
    const [Address , setAddress] = React.useState("");
    const [State , setState] = React.useState("");
    const [City , setCity] = React.useState("");
    const [Vehical_Modal , setVehical_Modal] = React.useState("");
    const [Bike_Register_No , setBike_Register_No] = React.useState("");
    const [Medical_Certificate , setMedical_Certificate] = React.useState("");
    const [Puc_Certificate , setPuc_Certificate] = React.useState("");
    const [Bike_Insurance_Policy , setBike_Insurance_Policy] = React.useState("");
    const [Vehicle_image , setVehicle_image] = React.useState("");

    console.log(Name , Email , Contact , Password , Pincode , Pancard , Aadharcard , Address , State , City , Vehical_Modal , Bike_Register_No , Medical_Certificate , Puc_Certificate , Bike_Insurance_Policy  , Vehicle_image)

    const [User , setUser] = React.useState("other");
    console.log(User)
    const [myCar, setMyCar] = React.useState("other");
    console.log(myCar)
    const handleChange = (event) => {
        setUser(event.target.value)
    }
  return (
    <>
      <PageTitle title="Add Data" />
      <div class="dropdown">
        <select value={User} onChange={handleChange}>
            <option value="other">Other</option>
            <option value="vendor">Vendor</option>
            <option value="delivery">Delivery</option>
        </select>
        </div>
      {/* <div className="container">
        <div className="row">
            <div className="col">
                <Button onClick={() => setUser("other")}>Other</Button>
            </div>
            <div className="col">
                <Button onClick={() => setUser("vendor")}>Vendor</Button>
            </div>
            <div className="col">
                <Button onClick={() => setUser("delivery")}>Delivery</Button>
            </div>
        </div>
      </div> */}

      <div className="container">
            <div className="row">
              <div className="col-sm-4">
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
              <div className="col-sm-4">
                <label for="exampleInputEmail1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                ></input>
              </div>
              <div className="col-sm-4">
                <label for="exampleInputEmail1" class="form-label">
                  Contact
                </label>
                <input
                  type="tel"
                  value={Contact}
                  onChange={(e) => setContact(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                ></input>
              </div>
              <div className="col-sm-4">
                <label for="exampleInputEmail1" class="form-label">
                  password
                </label>
                <input
                  type="text"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                ></input>
              </div>
              <div className="col-sm-4">
                <label for="exampleInputEmail1" class="form-label">
                Pincode
                </label>
                <input
                  type="text"
                  value={Pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                ></input>
              </div>
              <div className="col-sm-4">
                <label for="exampleInputEmail1" class="form-label">
                Pancard
                </label>
                <input
                  type="text"
                  value={Pancard}
                  onChange={(e) => setPancard(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  ></input>
              </div>
              <div className="col-sm-4">
                <label for="exampleInputEmail1" class="form-label">
                Aadharcard
                </label>
                <input
                  type="text"
                  value={Aadharcard}
                  onChange={(e) => setAadharcard(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  ></input>
              </div>
              <div className="col-sm-4">
                <label for="exampleInputEmail1" class="form-label">
                Address
                </label>
                <input
                  type="text"
                  value={Address}
                  onChange={(e) => setAddress(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                ></input>
              </div>
              <div className="col-sm-4">
                <label for="exampleInputEmail1" class="form-label">
                State
                </label>
                <input
                  type="text"
                  value={State}
                  onChange={(e) => setState(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                ></input>
              </div>
              <div className="col-sm-4">
                <label for="exampleInputEmail1" class="form-label">
                City
                </label>
                <input
                  type="text"
                  value={City}
                  onChange={(e) => setCity(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                ></input>
              </div>
              {
                User === "delivery" ? 
                <>
                <div className="col-sm-4">
                <label for="exampleInputEmail1" class="form-label">
                Vehical_Modal
                </label>
                <input
                  type="text"
                  value={Vehical_Modal}
                  onChange={(e) => setVehical_Modal(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                ></input>
              </div>
              <div className="col-sm-4">
                <label for="exampleInputEmail1" class="form-label">
                Bike_Register_No
                </label>
                <input
                  type="text"
                  value={Bike_Register_No}
                  onChange={(e) => setBike_Register_No(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                ></input>
              </div>
              <div className="col-sm-4">
                <label for="exampleInputEmail1" class="form-label">
                Medical_Certificate
                </label>
                <input
                  type="text"
                  value={Medical_Certificate}
                  onChange={(e) => setMedical_Certificate(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                ></input>
              </div>
              <div className="col-sm-4">
                <label for="exampleInputEmail1" class="form-label">
                Puc_Certificate
                </label>
                <input
                  type="text"
                  value={Puc_Certificate}
                  onChange={(e) => setPuc_Certificate(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                ></input>
              </div>
              <div className="col-sm-4">
                <label for="exampleInputEmail1" class="form-label">
                Bike_Insurance_Policy
                </label>
                <input
                  type="text"
                  value={Bike_Insurance_Policy}
                  onChange={(e) => setBike_Insurance_Policy(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                ></input>
              </div>
              <div className="col-sm-4">
                <label for="exampleInputEmail1" class="form-label">
                Vehicle_image
                </label>
                <input
                  type="text"
                  value={Vehicle_image}
                  onChange={(e) => setVehicle_image(e.target.value)}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                ></input>
              </div>

                </>
                : ""
              }
                            
            </div>
          </div>
    </>
  );
}

export default AddUser;
