import React from 'react'
import styled from 'styled-components';
import AutoComplete from '../../component/AutoComplete';
import { Button } from '@mui/material';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TimePicCom from '../../component/TimePicCom';
import CalenderCom from '../../component/CalenderCom';

const MakeT = () => {
  return (
      <Wrapper>
      <TitleW>
      <Title>몇가지 질문을 통해<br/>완벽한 워라밸을 경험해보세요!</Title>
      </TitleW>
      <QuestionW>
    <Question>
    <TitleBox>
        <Circle>1</Circle>
        <TextBox>어느 지역으로 가시나요?</TextBox>
    </TitleBox>
    <ContentBox>
        <AutoComplete />
    </ContentBox>
    </Question>

    <Question>
    <TitleBox>
        <Circle>2</Circle>
        <TextBox>일정이 어떻게 되나요?</TextBox>
    </TitleBox>
    <ContentBox>
        <CalenderCom />
    </ContentBox>
    </Question>

    <Question>
    <TitleBox>
        <Circle>3</Circle>
        <TextBox>어떤 업무 방식을 선호하시나요?</TextBox>
    </TitleBox>
    <ContentBox>

    </ContentBox>
    </Question>

    <Question>
    <TitleBox>
        <Circle>4</Circle>
        <TextBox>워라벨을 어떤비율로 설정할까요?</TextBox>
    </TitleBox>
    <ContentBox>

    </ContentBox>
    </Question>

    <Question>
    <TitleBox>
        <Circle>5</Circle>
        <TextBox>선호하는 업무 공간이 있나요?</TextBox>
    </TitleBox>
    <ContentBox>

    </ContentBox>
    </Question>

    <Question>
    <TitleBox>
        <Circle>6</Circle>
        <TextBox>쉼을 찾는 나만의 방법이 있나요?</TextBox>
        <SubTextBox>(복수선택)</SubTextBox>
    </TitleBox>
    <ContentBox>

    </ContentBox>
    </Question>

    <Question>
    <TitleBox>
        <Circle>7</Circle>
        <TextBox>고정된 일정이 있나요?</TextBox>
        <SubTextBox>(선택)</SubTextBox>
    </TitleBox>
    <ContentBox>
      <TimePicCom />
    </ContentBox>
    </Question>
    </QuestionW>

</Wrapper>
  )
}

export default MakeT

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  width: 552px;
  
`;

const Question = styled.div`
  width: 100%;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #F2F2F2;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border: 1px #E3E3E3;
`;

const TextBox = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const SubTextBox = styled.div`
  font-size: 12px;
  color: #777777;
  margin-left: 7px;
`;

const ContentBox = styled.div`
  border-left: 1px solid #dbdada;
  padding: 20px;
  width: 100%;
  margin-left: 14px;
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  width: 350px; /* 폰트 변경 후 수정 필요*/
  height: 58px;
  margin: 3%;
`
const TitleW = styled.div`
    width : 552px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px; /*네브바와 겹치지않게 콘텐츠 구역 */
`
const QuestionW = styled.div`
  width: 552px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #E3E3E3;
  border-radius: 5px;
  width: 552px;
  background-color: #F9F9F9;

`