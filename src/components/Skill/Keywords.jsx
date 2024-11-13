import React from 'react';
import styled from 'styled-components';

const KeywordsContainer = styled.div`
  width: 100%;
  margin-top: 100px;
  text-align: center;
  padding-bottom: 80px;

  @media all and (max-width: 1024px) {
    margin-top: 70px;
  }
`;

const KeywordBox = styled.div`
  font-size: 1rem;
  margin-top: 12px;
  line-height: 1.5;

  @media all and (max-width: 700px) {
    margin-top: 20px;
    font-size: 0.9rem;
  }
`;

const Title = styled.strong`
  font-weight: 600;
  color: ${({ theme }) => theme.textColors.primary};

  @media all and (max-width: 700px) {
    display: block;
  }
`;

const Desc = styled.span`
  margin-left: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.textColors.default};
`;

const Keyword = ({ title, desc }) => (
  <KeywordBox>
    <Title>{title}</Title>
    <Desc>{desc}</Desc>
  </KeywordBox>
);

export default function Keywords() {
  return (
    <KeywordsContainer>
      <Keyword
        title='FrontEnd'
        desc='항상 새로운 기술을 공부하고 자기계발 하는 것을 좋아합니다.'
      />
      <Keyword
        title='Design'
        desc='UX/UI에 관심이 많고, 재미있는 애니메이션을 흥미롭게 생각하고 고민합니다.'
      />
      <Keyword
        title='Communication'
        desc='사람들과의 대화를 좋아합니다. 다양한 팀들과의 소통이 원활합니다. '
      />
    </KeywordsContainer>
  );
}
