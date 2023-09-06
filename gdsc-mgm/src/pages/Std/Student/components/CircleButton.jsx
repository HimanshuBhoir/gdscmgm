// Circle.js

import React from 'react';
import styled from 'styled-components';

const CircleElement = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const Name = styled.div`
  margin-top: 10px;
`;

function CircleButton({ name, color, onClick }) {
  return (
    <CircleElement color={color} onClick={onClick}>
      {name}
      <Name>{name}</Name>
    </CircleElement>
  );
}

export default CircleButton;
