import React from 'react';
import { Img, SkillsContainer, SkillsItem, SkillsList } from './Skills.styles';

const SkillsData = [
  'HTML5',
  'CSS3',
  'SCSS',
  'JavaScript',
  'JQuery',
  'React.js',
  'Styled-Components',
  'TypeScript',
  'JSP',
  'Git',
  'Jira/Bitbucket/Wiki',
  'Photoshop/Illustrator',
];

export default function Skills() {
  return (
    <SkillsContainer>
      <SkillsList>
        {SkillsData.map((item, index) => (
          <SkillsItem>{item}</SkillsItem>
        ))}
      </SkillsList>
      <Img />
    </SkillsContainer>
  );
}
