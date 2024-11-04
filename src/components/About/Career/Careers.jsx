import React from 'react';
import {
  CareerContainer,
  CareerBox,
  CareerContents,
  Name,
  Team,
  Date,
  Work,
  List,
  Item,
  CareerImg,
} from './Career.styles';
import careerData from './careerData';

const Career = () => {
  return (
    <>
      {careerData.map((item, index) => (
        <CareerBox key={index}>
          <CareerContents>
            <Name>{item.company}</Name>
            <Team>{item.team}</Team>
            <Date>{item.date}</Date>
            <Work>{item.work}</Work>
            <List>
              {item.tasks.map((task, taskIndex) => (
                <Item key={taskIndex}>{task}</Item>
              ))}
            </List>
          </CareerContents>
          <CareerImg src={item.imgSrc} alt={item.imgAlt} />
        </CareerBox>
      ))}
    </>
  );
};

export default function Careers() {
  return (
    <CareerContainer>
      <Career />
    </CareerContainer>
  );
}
