import React from 'react';
import { QnaContainer, QnaContents, Title, Answer } from './Qna.styles';

export default function Qna() {
  return (
    <QnaContainer>
      <QnaContents>
        <Title>앞으로 어떤 커리어를 꿈꾸나요?</Title>
        <Answer>
          다른 사람들에게 유용한 지식과 기술을 갖춘 개발자가 되어,
          <br /> 함께 일하는 동료들에게 도움을 줄 수 있는 사람이 되고 싶습니다.
        </Answer>
        <Answer>
          특히 개발을 시작하는 사람들에게 방향을 제시하고 지원할 수 있는 사람이
          되고 싶습니다.
        </Answer>
        <Answer>
          프론트엔드 개발을 하면서 백엔드에 대한 필요성을 자주 느꼈으며
          <br />
          관련 툴과 언어에 대한 관심을 가지고 지속적으로 학습하고자 합니다.
        </Answer>
        <Answer>
          이를 통해 다양한 분야와 원활하게 소통하는 개발자가 되어,
          <br /> 여러 방면에서 가치를 창출할 수 있는 역량을 갖추고자 합니다.
        </Answer>
      </QnaContents>
    </QnaContainer>
  );
}
