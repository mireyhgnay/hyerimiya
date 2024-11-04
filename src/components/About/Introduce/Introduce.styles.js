import styled from 'styled-components';

export const IntroContainer = styled.section`
  width: 1200px;
  margin: 50px auto 0;

  @media all and (max-width: 1150px) {
    width: 100%;
  }
  @media all and (max-width: 500px) {
    margin: 20px auto 0;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media all and (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Img = styled.img`
  width: 550px;
  height: 550px;
  transform: scaleX(-1);
  border-radius: 50%;
  background: url('images/about.jpeg');
  background-size: cover;
  background-position: center 90%;
  background-repeat: no-repeat;

  @media all and (max-width: 1440px) {
    width: 450px;
    height: 450px;
  }

  @media all and (max-width: 500px) {
    width: 300px;
    height: 300px;
  }
`;

export const IntroList = styled.ul`
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px 0px 20px 40px;

  @media all and (max-width: 1150px) {
    padding: 20px;
  }
`;

export const IntroItem = styled.li`
  position: relative;
  font-size: 1rem;
  font-weight: 500;
  line-height: 25px;

  & + & {
    margin-top: 40px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0px;
    left: -10px;
    width: 6px;
    height: 6px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.textColors.primary};
  }

  @media all and (max-width: 1440px) {
    font-size: 0.9rem;
  }

  @media all and (max-width: 1150px) {
    &::after {
      display: none;
    }
  }
`;

// 3 Keywords
export const KeywordContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  margin: 70px 0 0 0;
  color: #000;

  @media all and (max-width: 1150px) {
    padding: 0 20px;
    margin: 50px 0;
  }

  @media all and (max-width: 1040px) {
    display: block;
  }
`;

export const KeywordBox = styled.div`
  position: relative;
  height: 370px;
  border-radius: 16px;
  text-align: center;
  background-color: #fffbe9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }

  @media all and (max-width: 1040px) {
    & + & {
      margin-top: 20px;
    }
  }
`;

export const KeywordInner = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 100px 10px 0px 10px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const KeywordTitle = styled.strong`
  font-size: 1.6rem;
  font-weight: 600;
`;

export const KeywordSubTitle = styled.p`
  margin-top: 10px;
  font-weight: 600;
`;

export const KeywordDesc = styled.p`
  margin-top: 30px;
  font-size: 0.9rem;
  line-height: 26px;
`;

export const BlogLink = styled.a`
  display: inline-block;
  margin-top: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #050c9c;

  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: #050c9c;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
