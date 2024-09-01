import React from 'react'
import styled from 'styled-components';
import AnswerButton from '../Components/NewAnswerButton';

const Q3 = ({setAnswers, answers}) => {

  const handleAnswerClick = (key, option) =>{
    setAnswers(prev => {
        return {...prev, [key]:option};
      }
    )
  };

  return (
    <Question>
      <TitleBox>
        <Circle>3</Circle>
        <TextBox>어떤 업무 방식을 선호하시나요?</TextBox>
      </TitleBox>
      <ContentBox>
        <AnswerButton onClick={()=>handleAnswerClick("work_style", 1)} selected={answers["work_style"] === 1} text='오전부터 하루 시작하고 싶어요'></AnswerButton>
        <AnswerButton onClick={()=>handleAnswerClick("work_style", 2)} selected={answers["work_style"] === 2} text='여유롭게 점심부터 시작하고 싶어요'></AnswerButton>
        <AnswerButton onClick={()=>handleAnswerClick("work_style", 3)} selected={answers["work_style"] === 3} text='느긋하게 오후부터 시작하고 싶어요'></AnswerButton>
      </ContentBox>
    </Question>
  )
}

export default Q3

const Question = styled.div`
  width: 100%;
  padding-left: 50px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;

const ContentBox = styled.div`
  border-left: 1px solid  #F9C387;
  padding: 40px 16px;
  width: 100%;
  height: 100%;
  margin-left: 14px;
  display:flex;
  flex-direction: column;
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