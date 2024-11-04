import styled from 'styled-components';

export const CareerContainer = styled.section`
  margin-top: 150px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textColors.primary};
`;

export const CareerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 100px;
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
  line-height: 2.5;

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
  width: 450px;
  height: 450px;
  border-radius: 20%;
`;
