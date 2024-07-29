import React from 'react';
import './Doctor.css';
import doctor1 from '../../assets/doctor_1.jpeg';
import doctor2 from '../../assets/doctor_2.jpeg';



const Doctors = () => {
  return (
    <>
   
    <div className="doctors">
      <h2>Our Doctors</h2>
      <div className="doctor">
        <img src={doctor1} alt="Doctor 1" height="200px" />
        <h3>Dr. Baldev Singh Bagchi</h3>
        <p>MBBS - AIIMS Delhi</p>
        <p>General Physician (38 years experience)</p>
        <p>97368 consults done</p>
      </div>
      <div className="doctor">
        <img src={doctor2} alt="Doctor 2" height="200px" />
        <h3>Dr. Phul Singh Rathod</h3>
        <p>MBBS - AIIMS Bhatinda</p>
        <p>Senior Psychologist (15 years experience)</p>
        <p>12764 consults done</p>
      </div>
    </div>
    </>
  );
};

export default Doctors;
