import React from 'react';
import './Scale.css';

class Scale extends React.Component {
  render() {
    const colors = ['#ff4500', '#ffa500', '#ffff00', '#9acd32', '#008000'];
    const labels = ['0', '10', '20', '30', '40', '50+'];

    return (
      <div className="scale">
        <div className="scale-scale">
          {colors.map((color, index) => (
            <div key={index} style={{ backgroundColor: color }} className="scale-color" />
          ))}
        </div>
        <div className="scale-labels">
          {labels.map((label, index) => (
            <div key={index} className="scale-label">{label}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Scale;
