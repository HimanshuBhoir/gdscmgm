import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ArrowContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

const ArrowHead = styled.div`
  width: 30px;
  height: 30px;
  background-color: #0074D9;
  clip-path: polygon(100% 50%, 0 0, 0 100%);
`;

const ArrowTail = styled.div`
  width: 10px;
  height: 10px;
  background-color: #0074D9;
  position: absolute;
`;

const Arrow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <ArrowContainer style={{ left: position.x, top: position.y }}>
      <ArrowHead />
      <ArrowTail style={{ left: '-15px', top: '50%' }} />
      <ArrowTail style={{ left: '-15px', top: '55%' }} />
      <ArrowTail style={{ left: '-15px', top: '60%' }} />
      {/* Add more ArrowTail components as needed */}
    </ArrowContainer>
  );
};

export default Arrow;
