import React from 'react'
import doctors from '../../image/doctors-image-.png'
import ambulance from "../../image/ambulance-img.png";
import firstaid from '../../image/first-aids.png'
import hospital from '../../image/hospital.png'

export default function Home() {
  return (
   <div className="container">
    <div className='home container'>
      <div className='container-content'>
          
           <div className='home-text m-auto text-light'>
            <h1>Homepital</h1>
            <h2 className='h5'>
              determine the nearest available hospitals
               which are suitable for the patient case and predict
                the waiting time for hospital to be available
               </h2>
           </div>
           <div className='home-image'>
            <img src={doctors} alt='bg-doctors' className='w-100 h-100'/>
           </div>
      </div>
      
    </div>
    <div className="about-us m-auto">
        <h2 className='mt-5 title'>About Us</h2>
        <div className='aboutus-card'>
          <img src={ambulance} alt='ambulance-image' className='m-3'/>
          <h2 className="h6 m-3">determine the nearest available hospitals which are suitable for the patient case and predict the waiting time for hospital to be available</h2>
        </div>
      </div>
      <div className="our-services m-auto">
        <h2 className='mt-5 title'>Our Services</h2>
        <div className="service-card mt-5">
            <div className="home-cards">
              <img src={firstaid} alt='first-aid' width={"200px"}/>
              <h2 className='h6 m-2'>We help patiant by he can find the first aid</h2>
            </div>
            <div className="home-cards">
            <img src={hospital} alt='first-aid' width={"200px"}/>
            <h2 className='h6 m-2'>We help patiant by he can find the first aid</h2>
            </div>
            </div>
      </div>
   </div>
  )
}
