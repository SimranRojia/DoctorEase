import React from 'react';
import './Home.css'; // Import the CSS file for Home component


const Home = () => {
    const heroStyle = {
      color: 'black', // Sets the text color to black
      textAlign: 'center', // Centers the text horizontally (optional)
      padding: '20px', // Adds some padding (optional)
    };
  
    return (
      <>
        <section className="hero" style={heroStyle}>
          <h2>Skip the travel!<br />Take Online Doctor Consultation</h2>
          <p>Compassionate care for all your medical needs.</p>
        </section>
      </>
    );
  };
  
  export default Home;
  