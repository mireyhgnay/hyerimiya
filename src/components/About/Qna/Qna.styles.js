import styled from 'styled-components';

export const QnaContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url('./images/qna.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const QnaContents = styled.div`
  width: 45%;
  height: 100vh;
  padding: 0 40px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media all and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Title = styled.strong`
  display: block;
  font-weight: 800;
  font-size: 1.4rem;
  margin-bottom: 20px;
`;

export const Answer = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 500;

  & + & {
    margin-top: 20px;
  }
`;
