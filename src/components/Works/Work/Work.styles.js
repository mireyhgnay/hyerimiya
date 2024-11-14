import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const ImgBox = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'imageUrl',
})`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center center;
  background-size: cover;
  width: 100%;
  display: block;
  height: 350px;
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const LinkBox = styled.a`
  &:hover ${ImgBox} {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

export const Title = styled.p`
  position: absolute;
  top: -35px;
  left: 4%;
  font-size: 3rem;
  font-weight: 900;
  line-height: 1;
  color: #000;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.2);

  @media all and (max-width: 580px) {
    font-size: 2rem;
    top: -45px;
    left: 0;
  }
`;

export const LinkTitle = styled(Title)`
  &::after {
    content: ' 🔗';
    font-size: 1.7rem;
    position: absolute;
    top: 0px;
    right: -30px;

    @media all and (max-width: 580px) {
      font-size: 1.3rem;
      right: -25px;
    }
  }
`;

export const SubTitle = styled.p`
  position: absolute;
  left: 4%;
  top: 5%;
  font-size: 2.5rem;
  font-weight: 900;
  color: #000;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.2);

  @media all and (max-width: 580px) {
    display: none;
  }
`;

export const Contents = styled.ul`
  width: 100%;
  margin-top: 20px;
`;

export const Item = styled.li`
  line-height: 1.5;

  strong {
    font-weight: 500;
  }

  & + & {
    margin-top: 8px;
  }
`;
