import React from 'react';
import Work from './Work';
import styled from 'styled-components';
import data from '../Work/WorkData';

const TemplateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-gap: 40px; */
`;

export default function WorkTemplate() {
  return (
    <TemplateContainer>
      {data.map((item, index) => (
        <Work />
      ))}
    </TemplateContainer>
  );
}
