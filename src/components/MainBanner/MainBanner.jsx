import {
  Container,
  ScrollDown,
  Title,
  ScrollBall,
  ScrollText,
  ScrollBox,
} from './MainBanner.styles';

function MainBanenr() {
  return (
    <Container>
      <Title>YANGHYERIM</Title>
      <ScrollBox>
        <ScrollDown>
          <ScrollBall></ScrollBall>
        </ScrollDown>
        <ScrollText>Scroll Down</ScrollText>
      </ScrollBox>
    </Container>
  );
}

export default MainBanenr;
