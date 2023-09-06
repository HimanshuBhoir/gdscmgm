import React, { useState } from 'react';
import { IconContext } from '@react-icons/all-files';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import styled, { css } from 'styled-components';
import { GiProcessor } from '@react-icons/all-files/gi/GiProcessor';
import { VscCode } from '@react-icons/all-files/vsc/VscCode';
import { VscDeviceMobile } from '@react-icons/all-files/vsc/VscDeviceMobile';
import CircleButton from './components/CircleButton';


function Student() {
  const { scroll } = useLocomotiveScroll();
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

  const IconStyle = {
    width: '30%',
    height: '100%',
    fontSize: '30%',
    color: 'black',
  };
  return (
    <Container data-scroll-section>
      {circles.map((circle, index) => (
          <CircleButton
            key={circle.id}
            color={circle.color}
            onClick={() => handleCircleClick(index)}
            isActive={index === centerIndex}
          />
        ))}
    </Container>
  );
}

export default Student;

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
