import React from 'react';
import Skills from '../components/Skill/Skills/Skills';
import Keywords from '../components/Skill/Keywords';
import styled from 'styled-components';

const SkillContainer = styled.section`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

export default function Skill() {
  return (
    <SkillContainer>
      <Skills />
      <Keywords />
    </SkillContainer>
  );
}
