import React from 'react';
import './LoadingAnimation.css';

function LoadingAnimation() {
  return (
    <div>
      <h2>Processing...</h2>
      <div className="loading-animation">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default LoadingAnimation;
