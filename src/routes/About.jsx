import React from 'react';
import Introduce from '../components/About/Introduce';
import Careers from '../components/About/Careers';
import Qna from '../components/About/Qna';
import Goal from '../components/About/Goal';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;

  @media all and (max-width: 1150px) {
    width: 100%;
  }
`;

export default function About() {
  return (
    <Wrapper>
      <Introduce />
      <Careers />
      <Qna />
      <Goal />
    </Wrapper>
  );
}
