import React from 'react'
import styled from 'styled-components';
import CalenderResult from '../Components/NewCalenderResult';
import CalenderCom from '../Components/NewCalenderCom';

const Q2 = ({setAnswers, answers}) => {
  return (
    <Question>
      <TitleBox>
        <Circle>2</Circle>
        <TextBox>일정이 어떻게 되나요?</TextBox>
      </TitleBox>
      <ContentBox>
        <CalenderBox>
          <CalenderCom id="start_date" answers={answers} setAnswers={setAnswers}/>~ <CalenderCom id="end_date" answers={answers} setAnswers={setAnswers}/>
        </CalenderBox>
        <CalenderBox><CalenderResult answers={answers}/></CalenderBox>
      </ContentBox>
    </Question>
  )
}

export default Q2

const Question = styled.div`
  width: 100%;
  padding-left: 50px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;

const ContentBox = styled.div`
  padding: 40px 16px;
  width: 100%;
  height: 100%;
  margin-left: 14px;
  border-left: 1px solid  #F9C387;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #F98C16;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border: #F98C16;
  font-size: 22px;
  text-align: center;
  cursor: default;
`;

const TextBox = styled.div`
  font-size: 22px;
  font-weight: bold;
  cursor: default;
`;

const CalenderBox = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`