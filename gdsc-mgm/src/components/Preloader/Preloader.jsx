import React, { useEffect } from 'react';
import { preLoaderAnim } from '../Animation/Preloader';
import styled from 'styled-components';

const PreloaderContainer = styled.div`
//   height: 100vh;
//   height: calc(var(--vh, 1vh) * 100);
//   width: 100%;
//   background: black;
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   z-index: 50;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   overflow: hidden !important;
`;

const TextsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 60px;
//   width: 280px;
//   font-size: 20px;
//   font-weight: 800;

//   span {
//     opacity: 0;
//     animation: fadeInUp 0.8s ease forwards;
//     margin-bottom: 10px;
//   }

//   @media (max-width: 768px) {
//     font-size: 17px;
//     width: 240px;
//   }
`;

const fadeInUpAnimation = `
//   @keyframes fadeInUp {
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
`;

function PreLoader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <PreloaderContainer>
      <style>{fadeInUpAnimation}</style>
      <TextsContainer>
        <span>Google</span>
        <span>Developer</span>
        <span>Student</span>
        <span>Code</span>
      </TextsContainer>
    </PreloaderContainer>
  );
}

export default PreLoader;
