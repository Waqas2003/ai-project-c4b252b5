import React from 'react';
import './Food.css';

function Food({ food }) {
  return (
    <div
      className="food"
      style={{
        top: `${food[1]}vh`,
        left: `${food[0]}vw`,
      }}
    />
  );
}

export default Food;