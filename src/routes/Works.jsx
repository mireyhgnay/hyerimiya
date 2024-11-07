import React from 'react';
import styled from 'styled-components';

const WorksContainer = styled.section`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
`;

const Title = styled.h1`
  font-size: 7rem;
  font-weight: 900;
  text-align: center;
  letter-spacing: 20px;
  color: ${({ theme }) => theme.textColors.primary};
`;

export default function Work() {
  return (
    <WorksContainer>
      <Title>PORTFOLIO</Title>
      {/* <Footer /> */}
    </WorksContainer>
  );
}