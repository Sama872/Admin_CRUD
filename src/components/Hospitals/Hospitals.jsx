import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllHospitals } from '../Redux/HospitalSlice';
import { Grid } from 'react-loader-spinner';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Hospitals() {
  let { hospital, isLoading } = useSelector(({ hospitals }) => hospitals);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHospitals());
  }, [dispatch]);

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
          {hospital.map((hospital) => (
            <div className="col-md-3 full-hospital-card m-2" key={hospital.id}>
              <div className='top-hospital-card'>
                <h4>{hospital.name}</h4>
              </div>
              <div className='bottom-hospital-card'>
                <h5>{hospital.beds}</h5>
                <h5>{hospital.phone}</h5>
                <h5>{hospital.cases}</h5>
                <h5>{hospital.type}</h5>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
