import React, { useState } from 'react';
import styled from 'styled-components';
// import CircleButton from './components/CircleButton';

function Members() {
  const [centerIndex, setCenterIndex] = useState(0);

  const circles = [
    { id: 1, color: 'red' },
    { id: 2, color: 'blue' },
    { id: 3, color: 'green' },
    { id: 4, color: 'yellow' },
    { id: 5, color: 'purple' },
  ];

  const handleCircleClick = (index) => {
    setCenterIndex(index);
  };

  return (
    <Container>
        Hii
        {/* {circles.map((circle, index) => (
          <CircleButton
            key={circle.id}
            color={circle.color}
            onClick={() => handleCircleClick(index)}
            isActive={index === centerIndex}
          />
        ))} */}
    </Container>
  );
}

export default Members;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 2;
  font-family: 'Google Sans', sans-serif;
  
  ${({ theme }) => theme.tablet`
    min-height: calc(var(--vh, 1vh) * 100);
  `}
`;