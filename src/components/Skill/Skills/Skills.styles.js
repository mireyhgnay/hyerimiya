import styled from 'styled-components';

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 50px;

  @media all and (max-width: 1024px) {
    display: block;
    text-align: center;
  }
`;
export const SkillsList = styled.ul``;
export const SkillsItem = styled.li`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.6;

  @media all and (max-width: 1090px) {
    font-size: 1.7rem;
  }
`;

export const Img = styled.img`
  width: 600px;
  height: 450px;
  background: url('./images/skills.gif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.5s;

  @media all and (max-width: 1090px) {
    width: 500px;
    height: 350px;
    margin-top: 30px;
  }
  @media all and (max-width: 550px) {
    width: 100%;
  }
`;
