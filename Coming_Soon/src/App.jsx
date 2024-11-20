import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
// CSS FILE LINK
import "./App.css";


const App = () => {
  // Set the target date to November 29th, 8:00 PM
  const targetDate = new Date('2024-11-29T20:00:00').getTime();

  return (
    <section
      className="container"
      style={{
        backgroundImage: 'url("https://i.pinimg.com/474x/5f/21/24/5f2124ee766032d850899008ada7a85c.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <div className="logo">The Infinite Apparels</div>
      <div className="clock_content">
        <h1 style={{ color: 'black' }}>We are almost there</h1>
        <h3 style={{ color: 'white', fontFamily: 'Arial, sans-serif' }}>Stay tuned for something amazing.</h3>
        <FlipClockCountdown
          className="flip-clock"
          to={targetDate}
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
        />
        <button className="button" onClick={() => alert('You will be notified soon!')}>Notify Me</button>
      </div>
    </section>
  );
};

export default App;

