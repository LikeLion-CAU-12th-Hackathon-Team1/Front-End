import React from 'react'
import styled from 'styled-components';
import AnswerButton from '../Components/NewAnswerButton';

const Q6 = ({setAnswers, answers}) => {

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
        <Circle>6</Circle>
        <TextBox> 선호하는 업무 공간이 있나요?</TextBox><SubTextBox>(복수선택)</SubTextBox>
      </TitleBox>
      <ContentBox>
        <AnswerButton text='공방' onClick={()=> handleAnswerClick("workation2rest", 1)} selected={Array.isArray(answers["workation2rest"]) && answers["workation2rest"].includes(1)}/>
        <AnswerButton text='게임' onClick={()=> handleAnswerClick("workation2rest", 2)} selected={Array.isArray(answers["workation2rest"]) && answers["workation2rest"].includes(2)}/>
        <AnswerButton text='독서' onClick={()=> handleAnswerClick("workation2rest", 3)} selected={Array.isArray(answers["workation2rest"]) && answers["workation2rest"].includes(3)}/>
        <AnswerButton text='라이딩' onClick={()=> handleAnswerClick("workation2rest", 4)} selected={Array.isArray(answers["workation2rest"]) && answers["workation2rest"].includes(4)}/>
        <AnswerButton text='명상' onClick={()=> handleAnswerClick("workation2rest", 5)} selected={Array.isArray(answers["workation2rest"]) && answers["workation2rest"].includes(5)}/>
        <AnswerButton text='미술' onClick={()=> handleAnswerClick("workation2rest", 6)} selected={Array.isArray(answers["workation2rest"]) && answers["workation2rest"].includes(6)}/>
        <AnswerButton text='산책' onClick={()=> handleAnswerClick("workation2rest", 7)} selected={Array.isArray(answers["workation2rest"]) && answers["workation2rest"].includes(7)}/>
        <AnswerButton text='서핑' onClick={()=> handleAnswerClick("workation2rest", 8)} selected={Array.isArray(answers["workation2rest"]) && answers["workation2rest"].includes(8)}/>
        <AnswerButton text='쇼핑' onClick={()=> handleAnswerClick("workation2rest", 9)} selected={Array.isArray(answers["workation2rest"]) && answers["workation2rest"].includes(9)}/>
        <AnswerButton text='스포츠 관람' onClick={()=> handleAnswerClick("workation2rest", 10)} selected={Array.isArray(answers["workation2rest"]) && answers["workation2rest"].includes(10)}/>
        <AnswerButton text='액티비티' onClick={()=> handleAnswerClick("workation2rest", 11)} selected={Array.isArray(answers["workation2rest"]) && answers["workation2rest"].includes(11)}/>
        <AnswerButton text='운동' onClick={()=> handleAnswerClick("workation2rest", 12)} selected={Array.isArray(answers["workation2rest"]) && answers["workation2rest"].includes(12)}/>
        <AnswerButton text='요가' onClick={()=> handleAnswerClick("workation2rest", 13)} selected={Array.isArray(answers["workation2rest"]) && answers["workation2rest"].includes(13)}/>
        <AnswerButton text='자연힐링' onClick={()=> handleAnswerClick("workation2rest", 14)} selected={Array.isArray(answers["workation2rest"]) && answers["workation2rest"].includes(14)}/>
        </ContentBox>
      </Question>
  )
}

export default Q6

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