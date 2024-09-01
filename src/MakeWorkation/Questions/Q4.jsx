import React from 'react'
import styled from 'styled-components';
import AnswerButton from '../Components/NewAnswerButton';

const Q4 = ({setAnswers, answers}) => {

  const handleAnswerClick = (key, option) =>{
    setAnswers(prev => {
        return {...prev, [key]:option};
      }
    )
  };

  return (
    <Question>
      <TitleBox>
        <Circle>4</Circle>
        <TextBox>이번 워케이션의 목적은 어떻게 되시나요?</TextBox>
      </TitleBox>
      <ContentBox>
        <AnswerButton onClick={()=>handleAnswerClick("work_purpose", 1)} selected={answers["work_purpose"] === 1} text='휴식보다 일을 집중적으로 하고 싶어요'></AnswerButton>
        <AnswerButton onClick={()=>handleAnswerClick("work_purpose", 2)} selected={answers["work_purpose"] === 2} text='일과 휴식의 균형이 중요해요'></AnswerButton>
        <AnswerButton onClick={()=>handleAnswerClick("work_purpose", 3)} selected={answers["work_purpose"] === 3} text='일보다 휴식을 주로 하고 싶어요'></AnswerButton>
      </ContentBox>
    </Question>
  )
}

export default Q4

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