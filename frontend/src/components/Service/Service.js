import React from 'react';
import './Services.css';
import medicine from '../../assets/medicine.png';
import consult from '../../assets/consult.jpg';
import doc from '../../assets/doc.jpg'; // Ensure the file name is correct

const Services = () => {
  return (
    <>
      <section className="services">
        <h2>Our Services</h2>
        <div 
          className="service" 
          style={{ 
            backgroundImage: `url(${medicine})`, 
            height: '200px',  // Increased height
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // color: 'white', // Adjust text color to contrast with the background
            padding: '20px', // Optional: Adds padding inside the box
          }}
        >
          <h3>General Checkup</h3>
          <p>Get all your general checkup done for the day</p>
          <p><b>Starting @ ₹9,999 only</b></p>
        </div>
        <div 
          className="service" 
          style={{ 
            backgroundImage: `url(${consult})`, 
            height: '200px',  // Increased height
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // color: 'white', // Adjust text color to contrast with the background
            padding: '20px', // Optional: Adds padding inside the box
          }}
        >
          <h3>Psychological Consulting</h3>
          <p>Get your best mental health advice from the best people</p>
          <p><b>Starting @ ₹29,999 only</b></p>
        </div>
        <div 
          className="service" 
          style={{ 
            backgroundImage: `url(${doc})`, 
            height: '200px',  // Increased height
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // color: 'white', // Adjust text color to contrast with the background
            padding: '20px', // Optional: Adds padding inside the box
          }}
        >
          <h3>Post Surgery Consulting</h3>
          <p>Get to know what to do post-surgery to recover quickly</p>
          <p><b>Starting @ ₹15,999 only</b></p>
        </div>
      </section>
    </>
  );
};

export default Services;
