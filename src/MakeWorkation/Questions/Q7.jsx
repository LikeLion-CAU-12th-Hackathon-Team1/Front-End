import React from 'react'
import styled from 'styled-components';
import sun from "../../assets/img/sun.svg"
import moon from "../../assets/img/moon.svg"
import TimePicCom from "../Components/NewTimePicCom"

const Q7 = ({setAnswers, answers}) => {
  return (
    <Question>
      <TitleBox>
        <Circle>7</Circle>
        <TextBox>기상, 취침시간이 어떻게 되나요?</TextBox>
      </TitleBox>
      <ContentBox>
        <Sleep>
          <SleepTime>
            <SunImg src={sun} /><TimePicCom id="end_sleep" setAnswers={setAnswers} answers={answers}/>
          </SleepTime>
          <SleepTime>
            <SunImg src={moon} /><TimePicCom id="start_sleep" setAnswers={setAnswers} answers={answers}/>
          </SleepTime>
        </Sleep>
      </ContentBox>
    </Question>
  )
}

export default Q7

const Question = styled.div`
  width: 100%;
  padding-left: 50px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;

const ContentBox = styled.div`
  height: 100%;
  margin-left: 14px;
  display:flex;
  flex-direction: row;
  width: 90%;
  padding-top: 40px;
  flex-wrap: wrap; /* 줄바꿈 추가 */
  padding-bottom: 65px;
  justify-content: center;
  align-items: center;

`
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

const SunImg = styled.img`
  width: 30px;
  margin-right: 15px;
`
const Sleep = styled.div`
  display: flex;
  width: 90%;
  height: 30px;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 50px;
`

const SleepTime= styled.div`
  display: flex;
  width: 250px;
  height: 30px;
  margin-right: 40px;
  margin-left: 10px;
  align-items: center;
`