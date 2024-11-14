import React from 'react';
import styled from 'styled-components';
import WorkTemplate from '../components/Works/Work/WorkTemplate';

const WorksContainer = styled.section`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-top: 50px;
  font-size: 7rem;
  font-weight: 900;
  text-align: center;
  letter-spacing: 20px;
  color: ${({ theme }) => theme.textColors.primary};
`;

const Footer = styled.footer`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  padding: 50px 0;
`;

export default function Work() {
  return (
    <WorksContainer>
      <Title>PORTFOLIO</Title>
      <WorkTemplate />
      <Footer>Thank you for taking a look at my portfolio :)</Footer>
    </WorksContainer>
  );
}
