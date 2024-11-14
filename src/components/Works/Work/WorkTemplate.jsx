import React from 'react';
import Work from './Work';
import styled from 'styled-components';
import workDatas from '../Work/WorkData';

const TemplateContainer = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 150px 100px;

  @media all and (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default function WorkTemplate() {
  return (
    <TemplateContainer>
      {workDatas.map((item, index) => (
        <Work key={index} item={item} />
      ))}
    </TemplateContainer>
  );
}
