import styled from 'styled-components';

export const Container = styled.section`
  background: url('./images/main_banner.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
`;
export const Title = styled.h1`
  font-size: 200px;
  letter-spacing: 5px;
  text-shadow: 8px 8px 10px rgba(0, 0, 0, 0.3);
  font-family: 'Anton', sans-serif;
  color: ${({ theme }) => theme.textColors.secondary};
`;
export const ScrollDown = styled.div``;
