import React, { useRef, useEffect } from 'react';
import '../styles/RandomCircleColors.css'

const Settings = () => {
  const canvasRef = useRef(null);
  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    // Function to generate random number
    const random = (number) => Math.floor(Math.random() * number);

    // Function to generate random color
    const randomColor = () => `rgba(${random(256)},${random(256)},${random(256)},0.5)`;

    // Draw circles on canvas
    const draw = () => {
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = randomColor();  // Use random color
        ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
        ctx.fill();
      }
    };

    // Initial draw
    draw();

    // Handle button click event
    const button = document.querySelector('button');
    button.addEventListener('click', draw);

    // Cleanup on component unmount
    return () => {
      button.removeEventListener('click', draw);
    };
  }, [WIDTH, HEIGHT]);

  return (
    <div>
      <button className='update-button'>Update</button>
      <canvas ref={canvasRef}>

      </canvas>
    </div>
  );
};

export default Settings;
