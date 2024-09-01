import React from 'react'
import AutoComplete from '../Components/NewAutoComplete';
import AutoComplete2 from '../Components/NewAutoComplete2';
import styled from 'styled-components';

const Q1 = ({setAnswers}) => {
  return (
    <Question>
      <TitleBox>
        <Circle>1</Circle>
        <TextBox>어느 지역으로 가시나요?</TextBox>
      </TitleBox>
      <ContentBox>
        <AutoComplete2/><AutoComplete setAnswers={setAnswers}/>
      </ContentBox>
    </Question>
  )
}

export default Q1

const Question = styled.div`
  width: 100%;
  padding-left: 50px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  padding-top: 50px;
`;

const ContentBox = styled.div`
  padding: 40px 16px;
  width: 100%;
  height: 100%;
  margin-left: 14px;
  display: flex;
  width: 40%;
  justify-content: space-between;
  padding-left: 40px;
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