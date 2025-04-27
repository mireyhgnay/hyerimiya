import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  width: 90%;
  max-width: 1200px;
  margin: 50px auto 0;
  padding-bottom: 100px;

  @media all and (max-width: 540px) {
    margin-top: 20px;
  }
`;

const Title = styled.h1`
  font-size: 5.5rem;
  font-weight: 900;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.textColors.primary};

  @media all and (max-width: 1024px) {
    font-size: 4.5rem;
  }

  @media all and (max-width: 720px) {
    font-size: 3.5rem;
  }

  @media all and (max-width: 540px) {
    font-size: 2rem;
  }
`;

const ContactList = styled.ul`
  margin-top: 20px;
`;

const ContactItem = styled.li`
  line-height: 3;

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: rgba(183, 183, 183, 0.1);
    transition: 0.5s;
  }
`;

const ContactLink = styled.a`
  display: block;
  color: ${({ theme }) => theme.textColors.default};
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 2px;

  &:hover {
    color: #000;
    transition: 0.5s;
  }

  @media all and (max-width: 720px) {
    font-size: 1.5rem;
  }

  @media all and (max-width: 540px) {
    font-size: 1rem;
  }
`;

const contactData = [
  {
    name: 'did3296@naver.com',
    href: 'mailto: did3296@naver.com',
  },
  {
    name: 'Github',
    href: 'https://github.com/mireyhgnay',
  },
  {
    name: 'Tech Blog',
    href: 'https://hyerimiya.notion.site/Hyerim-Front-End-Developer-1d147244c10780108380d1e9c73e723c?pvs=4',
  },
  {
    name: 'Daily Blog',
    href: 'https://blog.naver.com/hyerimiya_',
  },
];

export default function Contact() {
  return (
    <ContactContainer>
      <Title>CONTACT ME</Title>
      <ContactList>
        {contactData.map((item, index) => (
          <ContactItem key={index}>
            <ContactLink href={item.href} target='_blank' rel='noreferrer'>
              {item.name}
            </ContactLink>
          </ContactItem>
        ))}
      </ContactList>
    </ContactContainer>
  );
}
