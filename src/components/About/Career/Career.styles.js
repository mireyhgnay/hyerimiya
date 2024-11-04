import styled from 'styled-components';

export const CareerContainer = styled.section`
  width: 1200px;
  margin: 150px auto;

  @media all and (max-width: 1190px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const CareerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 80px;
  }
`;

export const CareerContents = styled.div``;

export const Name = styled.strong`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.5;
`;

export const Team = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
`;

export const Date = styled.p`
  font-weight: 500;
  line-height: 2;
`;

export const Work = styled.p`
  font-weight: 500;
`;

export const List = styled.ul`
  margin-top: 30px;
`;

export const Item = styled.li`
  position: relative;
  padding-left: 9px;
  line-height: 1.5;
  margin-top: 12px;

  &:first-child {
    font-weight: 500;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 5px;
    height: 5px;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.textColors.primary};
  }
`;

export const CareerImg = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 20%;

  @media all and (max-width: 1024px) {
    display: none;
  }
`;
