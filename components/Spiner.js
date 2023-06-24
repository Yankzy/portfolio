import React from 'react';

const Spiner = () => {
  const loaderStyle = {
    position: 'relative',
    width: '30px',
    height: '30px',
    borderRadius: '10px',
  };

  const barStyle = {
    width: '8%',
    height: '24%',
    background: '#5f4def',
    position: 'absolute',
    left: '50%',
    top: '30%',
    opacity: '0',
    borderRadius: '50px',
    boxShadow: '0 0 3px rgba(0, 0, 0, 0.2)',
    animation: 'fade458 1s linear infinite',
  };

  const keyframesStyle = `
    @keyframes fade458 {
      from {
        opacity: 1;
      }

      to {
        opacity: 0.25;
      }
    }
  `;

  return (
    <div style={loaderStyle}>
      <style>{keyframesStyle}</style>
      <div style={{ ...barStyle, transform: 'rotate(0deg) translate(0, -130%)', animationDelay: '0s' }}></div>
      <div style={{ ...barStyle, transform: 'rotate(30deg) translate(0, -130%)', animationDelay: '-1.1s' }}></div>
      <div style={{ ...barStyle, transform: 'rotate(60deg) translate(0, -130%)', animationDelay: '-1s' }}></div>
      <div style={{ ...barStyle, transform: 'rotate(90deg) translate(0, -130%)', animationDelay: '-0.9s' }}></div>
      <div style={{ ...barStyle, transform: 'rotate(120deg) translate(0, -130%)', animationDelay: '-0.8s' }}></div>
      <div style={{ ...barStyle, transform: 'rotate(150deg) translate(0, -130%)', animationDelay: '-0.7s' }}></div>
      <div style={{ ...barStyle, transform: 'rotate(180deg) translate(0, -130%)', animationDelay: '-0.6s' }}></div>
      <div style={{ ...barStyle, transform: 'rotate(210deg) translate(0, -130%)', animationDelay: '-0.5s' }}></div>
      <div style={{ ...barStyle, transform: 'rotate(240deg) translate(0, -130%)', animationDelay: '-0.4s' }}></div>
      <div style={{ ...barStyle, transform: 'rotate(270deg) translate(0, -130%)', animationDelay: '-0.3s' }}></div>
      <div style={{ ...barStyle, transform: 'rotate(300deg) translate(0, -130%)', animationDelay: '-0.2s' }}></div>
      <div style={{ ...barStyle, transform: 'rotate(330deg) translate(0, -130%)', animationDelay: '-0.1s' }}></div>
    </div>
  );
}

export default Spiner;
