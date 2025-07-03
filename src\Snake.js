import React from 'react';
import './Snake.css';

function Snake({ snake }) {
  return (
    <div>
      {snake.map((segment, index) => (
        <div
          key={index}
          className="snake-segment"
          style={{
            top: `${segment[1]}vh`,
            left: `${segment[0]}vw`,
          }}
        />
      ))}
    </div>
  );
}

export default Snake;