import React from 'react';
import styled, {keyframes} from 'styled-components';
import { HiOutlineArrowNarrowDown } from '@react-icons/all-files/hi/HiOutlineArrowNarrowDown';

function Footer() {
  return (
    <Container data-scroll-section>
      <TitleContainer>
        <Title>
          Want to become part of our team?
        </Title>
        <ArrowContainer>
          <Arrow />
        </ArrowContainer>
      </TitleContainer>
      <TitleEnd>
        Not hiring at the moment, stay connected!
      </TitleEnd>
    </Container>
  )
}

export default Footer;

const Container = styled.div`
  width: 100%;
  min-height: 250vh;
  position: relative; /* Added to make sure absolute positioning works */

  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.backgroundColor.white} 0%,
    ${(props) => props.theme.backgroundColor.black} 60%
  );
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.div`
  font-size: 60px;
  padding: 5vh;

  ${({ theme }) => theme.mobile`
    font-size: 30px;
    padding: 5vh;
  `}
`;


const ArrowContainer = styled.div`
  text-align: center;
  position: absolute;
  top: 40vh; /* Set to '120vh' from the bottom of the parent container */
  left: 50%;
  transform: translateX(-50%);
  
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(150px); /* Adjust the bounce distance as needed */
  }
`;

const Arrow = styled(HiOutlineArrowNarrowDown)`
  font-size: 300px; /* Initial size */
  font-weight: 300; /* Reduced weight */
  animation: ${bounce} 2s ease-in-out infinite;

  ${({ theme }) => theme.mobile`
    font-size: 150px; /* Smaller size for mobile */
    font-weight: 150; /* Reduced weight */

  `}
`;

const TitleEnd = styled.div`
  font-size: 60px;
  padding: 5vh;
  color: white;
  position: absolute;
  bottom: 200px;
  left: 20%;
  transform: translateX(-10%);
  text-align: center;

  ${({ theme }) => theme.mobile`
    font-size: 25px;
  `}
`;
