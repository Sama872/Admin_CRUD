import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteHospital, getAllHospitals } from '../Redux/HospitalSlice';
import { Grid } from 'react-loader-spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../image/hospital-animation-removebg-preview.png'
import img2 from '../../image/hospital-bg-removebg-preview.png'
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
export default function Hospitals() {
  let { hospital, isLoading} = useSelector(({ hospitals }) => hospitals);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHospitals());
  }, []);

  async function deleteSpecificHospital(id) {
    try {
        let data = await dispatch(deleteHospital(id));
        toast.success("Hospital deleted successfully");
        console.log(data);
        dispatch(getAllHospitals());
    } catch (error) {
        toast.error("Failed to delete hospital");
        console.error(error);
    }
}
  return (
    <div className='container hospital'>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Grid
            visible={true}
            height="100"
            width="100"
            color="#039b8c"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
          />
        </div>
      ) : (
<div className='row mt-5 justify-content-center'>
 <button className="add-btn d-flex justify-content-center align-items-center" ><Link to='/add' className='all-link'>Add Hospital</Link></button> 
  {hospital.map((hospital) => (
    <div className="col-md-3 m-2" key={hospital._id}>
      <div className='full-hospital-card'>
          <div className='top-hospital-card'>
           {hospital.type==='Governmental'? <img src={img1} alt='bg' className='w-75'/>:<img src={img2} alt='bg' className='w-75'/>}
                <h6>{hospital.name}</h6>
          </div>
          <div className='bottom-hospital-card'>
            <h6>Number of beds :{hospital.beds}</h6>
            <h6>Phone Number :{hospital.phone}</h6>
            {/* <p>{hospital.cases}</p> */}
            <h6>Sector :{hospital.type}</h6>
          </div>
          <div className='hospital-bottons'>
            <button className='btn btn-outline-success m-2'><i className="fa-regular fa-pen-to-square"></i> Edite</button>
            <button className='btn btn-outline-danger m-2' onClick={()=>deleteSpecificHospital(hospital._id)}> <i className="fa-solid fa-trash" style={{color:"red"}} ></i> Delete</button>
          </div>
      </div>
    </div>
  ))}
</div>

      )}
    </div>
  );
}
