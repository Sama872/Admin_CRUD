import React from "react";
import logo from "../../image/logo.png";
import { useFormik } from "formik";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddHospital() {
  let navigate=useNavigate()
  async function handleAddSubmit(values) {
    let { data } = await axios.post(`http://localhost:8000/api/v1/hospital`, values, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      },
    })
    .catch((error)=>{
      toast.error("This hospital already exists.")
      console.log(error);
    })
    
    console.log(data);
    if(data.data){
      toast.success("the hospital added successfully")
      navigate('/hospitals')
    }
    else{
      toast.error("This hospital already exists.")
    }
  }
  let formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      beds: "",
      phone: "",
      cases: "",
      type: "",
      latitude: "",
      longitude: "",
    },
    onSubmit: handleAddSubmit,
  });
  return (
    <div className="mt-5 container">
      <div className="container add-hospital w-75">
        <div className="logo-part">
          <h3>Add Hospital</h3>
          <img src={logo} alt="logo" />
        </div>
        <div className="form-style">
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" onChange={formik.handleChange} onBlur={formik.handleBlur} />
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" onChange={formik.handleChange} onBlur={formik.handleBlur}  />
            <label htmlFor="beds">Beds</label>
            <input type="number" name="beds" id="beds"  onChange={formik.handleChange} onBlur={formik.handleBlur} />
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" id="phone" onChange={formik.handleChange} onBlur={formik.handleBlur}  />
            <label htmlFor="cases">Cases</label>
            <input type="text" name="cases" id="cases" onChange={formik.handleChange} onBlur={formik.handleBlur}  />
            <label htmlFor="type">Type</label>
            <div>
              <input type="radio" name="type" id="type" value="Governmental" onChange={formik.handleChange} onBlur={formik.handleBlur} />
              <label htmlFor="Governmental"> Governmental </label>
              <input type="radio" name="type" id="type" value="Private" onChange={formik.handleChange} onBlur={formik.handleBlur} />
              <label htmlFor="Private"> Private </label>
            </div>
            <label htmlFor="latitude">latitude</label>
            <input type="text" name="latitude" id="latitude" onChange={formik.handleChange} onBlur={formik.handleBlur} />
            <label htmlFor="longitude">longitude</label>
            <input type="longitude" name="longitude" id="longitude" onChange={formik.handleChange} onBlur={formik.handleBlur} />
            <button className="add-btn d-flex justify-content-center align-items-center" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
