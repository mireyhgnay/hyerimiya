import styled, { keyframes } from 'styled-components';

export const Container = styled.section`
  background: url('./images/main_banner.jpg') center / cover no-repeat;
  width: 100%;
  height: 100vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  position: relative;
`;

export const Title = styled.h1`
  font-family: 'Anton', sans-serif;
  letter-spacing: 5px;
  text-shadow: 8px 8px 10px rgba(0, 0, 0, 0.3);
  color: #fff;
  transition: 0.1s linear;
  font-size: 12.5rem; /* 200px = 12.5rem (기본 16px 기준) */

  @media all and (max-width: 1090px) {
    font-size: 9rem;
  }
  @media all and (max-width: 780px) {
    font-size: 5rem;
  }
  @media all and (max-width: 490px) {
    font-size: 2rem;
  }
`;

export const ScrollBox = styled.div`
  position: absolute;
  bottom: 30px;
  width: 100%;
  text-align: center;
`;

export const ScrollDown = styled.div`
  width: 48px;
  height: 76px;
  border: 2px solid #fff;
  border-radius: 24px;
  margin: 0 auto 13px;
`;

// Ball Animation
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(40px);
    opacity: 0.5;
  }
`;

export const ScrollBall = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: #fff;
  margin: 12px auto;
  opacity: 1;
  animation: ${bounce} 2s ease-in-out infinite;
`;

const textMotion = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

export const ScrollText = styled.span`
  color: #fff;
  animation: ${textMotion} 2s ease-in-out infinite;
`;
