import React from 'react';
import {
  IntroContainer,
  AboutContainer,
  Img,
  IntroList,
  IntroItem,
  KeywordContainer,
  KeywordBox,
  KeywordInner,
  KeywordTitle,
  KeywordSubTitle,
  KeywordDesc,
  BlogLink,
} from './Introduce.styles';

const Keywords = ({ imgSrc, title, subtitle, contents, children }) => {
  return (
    <KeywordBox>
      <img src={`images/${imgSrc}`} alt={title} />
      <KeywordInner>
        <KeywordTitle>{title}</KeywordTitle>
        <KeywordSubTitle>{subtitle}</KeywordSubTitle>
        <KeywordDesc>{contents}</KeywordDesc>
        {children}
      </KeywordInner>
    </KeywordBox>
  );
};

export default function Introduce() {
  return (
    <IntroContainer>
      <h2 className='blind'>About Me</h2>
      <AboutContainer>
        <Img src='' />
        <IntroList>
          <IntroItem>
            안녕하세요ᕱᕱ <br />
            저는 UI 개발자로서 2년, 프론트엔드 개발자로서 3년의 경력을 가지고
            있습니다.
            <br />
            개발자로서의 성장과 성취에 큰 자부심을 느끼고 있습니다.
          </IntroItem>
          <IntroItem>
            조직 내에서 팀장님과 동료들의 인정을 받아 UI 개발에서 프론트엔드
            개발로 직무 전환에 성공한 경험이 있습니다. <br />
            새로운 기술과 도구들을 배우며 적응해 나가는 과정은 저에게 또 다른
            도전이었고, <br />
            이를 통해 한 단계 더 성장할 수 있었습니다.
          </IntroItem>
          <IntroItem>
            업무 역량을 더욱 높이기 위해 퇴근 후 혹은 주말에도 스터디 모임에
            참여하며 지속적으로 자기계발을 해왔고,
            <br />
            업무를 더욱 잘 해내고 싶은 열정이 제 원동력이 되어 꾸준히 공부하고
            발전하고 있습니다.
          </IntroItem>
        </IntroList>
      </AboutContainer>

      <KeywordContainer>
        <Keywords
          imgSrc='travel.jpg'
          title='Travel'
          subtitle='제 인생의 목표는 “여행하는 개발자”입니다.'
          contents={
            <>
              여행으로 얻게 되는 다양한 경험을 좋아하고,
              <br />
              그때의 추억으로 동기부여가 되어 살아갑니다.
            </>
          }
        >
          <BlogLink
            href='https://blog.naver.com/hyerimiya_'
            target='_blank'
            rel='noopener noreferrer'
          >
            여행 블로그 보러가기
          </BlogLink>
          &nbsp;👉
        </Keywords>
        <Keywords
          imgSrc='japanese.jpeg'
          title='Languages'
          subtitle='Korean / “Japanese”'
          contents={
            <>
              3년 동안 꾸준히 일본어 회화 수업을 진행해왔습니다.
              <br />
              일본에서 한 달간 거주한 경험이 있고, <br />
              이를 통해 일본인 친구들과 일상 대화를 나누며 지내왔습니다.
            </>
          }
        />
        <Keywords
          imgSrc='memo.jpg'
          title='Memo'
          subtitle='“메모” 하는 습관'
          contents={
            <>
              시간을 효율적으로 관리하기 위해 <br />
              매일 체크리스트를 적고, 하루, 한 달, 1년 계획을 세우고 <br />그
              목표를 이루기 위해 살아갑니다.
            </>
          }
        />
      </KeywordContainer>
    </IntroContainer>
  );
}
