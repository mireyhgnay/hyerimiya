import React from 'react';
import {
  ImgBox,
  Container,
  Title,
  SubTitle,
  Contents,
  Item,
  LinkBox,
  LinkTitle,
} from './Work.styles';

export default function Work({ item }) {
  const { url, imageUrl, title, subtitle, projectName, date, contents } = item;

  return (
    <Container>
      {url ? (
        <LinkBox href={url} target='_blank' rel='noreferrer'>
          <ImgBox imageUrl={imageUrl} />
          <LinkTitle>{title}</LinkTitle>
          <SubTitle>{subtitle}</SubTitle>
        </LinkBox>
      ) : (
        <>
          <ImgBox imageUrl={imageUrl} />
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
        </>
      )}

      {projectName || date || contents ? (
        <Contents>
          {projectName && (
            <Item>
              <strong>프로젝트명 : </strong>
              {projectName}
            </Item>
          )}

          {date && (
            <Item>
              <strong>프로젝트 기간 : </strong>
              {date}
            </Item>
          )}
          {contents && (
            <Item>
              <strong>프로젝트 내용 : </strong>
              <br />
              {contents}
            </Item>
          )}
        </Contents>
      ) : null}
    </Container>
  );
}
