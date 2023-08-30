import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

function EyesLookingDown({ translateZ }) {
  const [eyeColor1, setEyeColor1] = useState(getRandomColor());
  const [eyeColor2, setEyeColor2] = useState(getRandomColor());

  useEffect(() => {
    const interval = setInterval(() => {
      setEyeColor1(getRandomColor());
      setEyeColor2(getRandomColor());
    }, 2000); // Change colors every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Container translateZ={translateZ}>
      <EyeWrapper>
        <Eye color={eyeColor1}>
          <Pupil />
        </Eye>
      </EyeWrapper>
      <EyeWrapper>
        <Eye color={eyeColor2}>
          <Pupil />
        </Eye>
      </EyeWrapper>
    </Container>
  );
}

function getRandomColor() {
  const colors = ['red', 'blue', 'green', 'yellow'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

const Container = styled.div.attrs((props) => ({
  style: {
    transform: `perspective(400px) translateZ(${props.translateZ}px)`,
  },
}))`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: auto;
  padding-bottom: 20px;
  background-color: transparent;
  border-radius: 50%;
  border: 5px solid ${props => getRandomColor()}; /* Change border color randomly */
  overflow: hidden;
`;

const EyeWrapper = styled.div`
  width: 80px;
  height: 100px;
  margin: 0 10px;

  @media screen and (max-width: 768px) {
    width: 60px;
    height: 75px;
  }
`;

const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(15px);
  }
`;

const blink = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
`;

const Eye = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${props => props.color};
  border: 5px solid ${props => props.color}; /* Change border color randomly */
  position: relative;
  animation: ${blink} 2s infinite alternate;

  &:before,
  &:after {
    content: '';
    position: absolute;
    bottom: 10px;
    width: 20px;
    height: 30px;
    border-radius: 50%;
    background-color: #e0e0e0;
  }

  &:before {
    left: 10px;
  }

  &:after {
    right: 10px;
  }
`;

const Pupil = styled.div`
  position: absolute;
  bottom: 20px;
  left: 35%;
  transform: translateX(-50%);
  width: 30px;
  height: 40px;
  border-radius: 50%;
  background-color: #222;
  animation: ${moveUpDown} 3s infinite alternate;

  @media screen and (max-width: 768px) {
    width: 20px;
    height: 30px;
  }
`;

export default EyesLookingDown;
