import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Import your SVGs
import svg1 from '../../assets/images/icons/Cloud/cloud.svg'; // Replace with your SVG file paths
import svg2 from '../../assets/images/icons/Cloud/cloud.svg'; // Replace with your SVG file paths
import svg3 from '../../assets/images/icons/Cloud/cloud.svg'; // Replace with your SVG file paths
import svg4 from '../../assets/images/icons/Cloud/cloud.svg'; // Replace with your SVG file paths

const SVG = styled.img`
  position: absolute;
  width: 150px;
  z-index: -1;
  cursor: pointer;
`;

function getRandomPosition() {
  const isLeftToRight = Math.random() < 0.5; // Randomly decide direction
  const initialX = isLeftToRight ? -150 : window.innerWidth;
  const minVelocityX = 0.1;
  const maxVelocityX = 1.0; // Adjust the range for different speeds
  const velocityX = isLeftToRight
    ? Math.random() * (maxVelocityX - minVelocityX) + minVelocityX
    : -(Math.random() * (maxVelocityX - minVelocityX) + minVelocityX);

  return {
    x: initialX,
    y: Math.random() * (window.innerHeight / 3),
    velocityX: velocityX,
    isLeftToRight: isLeftToRight,
  };
}

function AnimatedSVGAnimation() {
  const initialSvgCount = 3; // Reduce the initial number of SVGs
  const spawnInterval = 10000; // Increase the interval for spawning new SVGs to 10 seconds

  const [svgPositions, setSvgPositions] = useState(() =>
    Array.from({ length: initialSvgCount }, (_, index) => getRandomPosition())
  );

  useEffect(() => {
    const spawnNewSVG = () => {
      setSvgPositions((prevPositions) => {
        const newPositions = [...prevPositions];
        if (newPositions.length < initialSvgCount) {
          newPositions.push(getRandomPosition());
        }
        return newPositions;
      });
    };

    const spawnIntervalId = setInterval(spawnNewSVG, spawnInterval);

    return () => {
      clearInterval(spawnIntervalId);
    };
  }, []);

  useEffect(() => {
    const animationIntervals = svgPositions.map((_, index) => {
      return setInterval(() => {
        setSvgPositions((prevPositions) => {
          return prevPositions.map((position, i) => {
            const newPosition = { ...position };
            newPosition.x += newPosition.velocityX;

            if (
              (newPosition.isLeftToRight && newPosition.x > window.innerWidth) ||
              (!newPosition.isLeftToRight && newPosition.x < -150)
            ) {
              // If the SVG goes outside the window, remove it
              return getRandomPosition();
            }

            return newPosition;
          });
        });
      }, 32); // Update at approximately 30 frames per second for smoother movement
    });

    return () => {
      animationIntervals.forEach((intervalId) => clearInterval(intervalId));
    };
  }, [svgPositions]);

  const handleSVGClick = (index) => {
    // Remove the clicked SVG from the list
    setSvgPositions((prevPositions) =>
      prevPositions.filter((_, i) => i !== index)
    );
  };

  return (
    <div>
      {svgPositions.map((position, index) => (
        <SVG
          key={index}
          src={
            index === 0
              ? svg1 // Use SVG 1 for animation
              : index === 1
              ? svg2
              : index === 2
              ? svg3
              : svg4 // Adjust to use any other SVG as needed
          }
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`, // Remove rotation
          }}
          onClick={() => handleSVGClick(index)}
        />
      ))}
    </div>
  );
}

export default AnimatedSVGAnimation;