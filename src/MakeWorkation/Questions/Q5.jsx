import React from 'react'
import styled from 'styled-components';
import AnswerButton from '../Components/NewAnswerButton';

const Q5 = ({setAnswers, answers}) => {

  const handleAnswerClick = (key, option) => {
    setAnswers(prev => {
      const selectedOptions = new Set(prev[key]);
      if (selectedOptions.has(option)) {
        selectedOptions.delete(option);
      } else {
        selectedOptions.add(option);
      }
      return { ...prev, [key]: Array.from(selectedOptions) };
    });
  };


  return (
    <Question>
      <TitleBox>
        <Circle>5</Circle>
        <TextBox> 선호하는 업무 공간이 있나요?</TextBox><SubTextBox>(복수선택)</SubTextBox>
      </TitleBox>
      <ContentBox>
        <AnswerButton text='바다가 보이는 공간' onClick={()=> handleAnswerClick("workation2space", 1)} selected={Array.isArray(answers["workation2space"]) && answers["workation2space"].includes(1)}/>
        <AnswerButton text='시야 탁 트인 개방적인 공간' onClick={()=> handleAnswerClick("workation2space", 2)} selected={Array.isArray(answers["workation2space"]) && answers["workation2space"].includes(2)}/>
        <AnswerButton text='업무에 집중할 수 있는 나만의 독립적인 공간' onClick={()=> handleAnswerClick("workation2space", 3)} selected={Array.isArray(answers["workation2space"]) && answers["workation2space"].includes(3)}/>
        <AnswerButton text='채광이 좋은 공간' onClick={()=> handleAnswerClick("workation2space", 4)} selected={Array.isArray(answers["workation2space"]) && answers["workation2space"].includes(4)}/>
        </ContentBox>
      </Question>
  )
}

export default Q5

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
  height: 100%;
  margin-left: 14px;
  display:flex;
  flex-direction: row;
  width: 90%;
  padding: 40px 16px;
  flex-wrap: wrap; /* 줄바꿈 추가 */
  padding-bottom: 65px;

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

const SubTextBox = styled.div`
  font-size: 18px;
  color: #777777;
  margin-left: 7px;
  cursor: default;
`;