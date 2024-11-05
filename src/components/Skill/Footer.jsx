import React from 'react';
import styled from 'styled-components';

const SkillsFooterContainer = styled.div`
  position: relative;
  margin-top: 120px;
`;

const SkillsFooter = styled.div`
  position: absolute;
  bottom: -30px;
  left: 40px;
  height: 80px;
  overflow: hidden;
`;

const Keyword = styled.span`
  color: ${({ theme }) => theme.textColors.primary};
  font-weight: bold;
  font-size: 6rem;
  font-family: 'Roboto', sans-serif;
  & + & {
    margin-left: 40px;
  }
`;

export default function Footer() {
  return (
    <SkillsFooterContainer>
      <SkillsFooter>
        <Keyword>FRONTEND</Keyword>
        <Keyword>DESIGN</Keyword>
        <Keyword>COMMUNICATION</Keyword>
      </SkillsFooter>
    </SkillsFooterContainer>
  );
}
