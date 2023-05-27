import React, { useState, useEffect } from 'react';
import './MapSwitch.css'; // Import the CSS file for styling

const MapSwitch = ({ onToggle }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    onToggle(newState); // Pass the new toggle state to the parent component
    localStorage.setItem('mapSwitchState', JSON.stringify(newState)); // Store the toggle state in local storage
  };

  useEffect(() => {
    const storedState = localStorage.getItem('mapSwitchState');
    if (storedState) {
      setIsChecked(JSON.parse(storedState));
    }
  }, []);

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-checkbox"
        id="toggle-switch"
        checked={isChecked}
        onChange={handleToggle}
      />
      <label className="toggle-label" htmlFor="toggle-switch">
        <div className="toggle-button"></div>
        <div className={`toggle-slider ${isChecked ? 'on' : 'off'}`}></div>
      </label>
    </div>
  );
};

export default MapSwitch;
