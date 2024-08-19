import React, { useState } from 'react'
import MakeWorkationLoading from './MakeWorkationLoading';
import styled from 'styled-components';
import NewMakeTHeader from "../assets/img/makehome.svg";
import Q1 from './Questions/Q1';
import Q3 from './Questions/Q3';
import Q2 from './Questions/Q2';
import Q4 from './Questions/Q4';
import Q5 from './Questions/Q5';
import Q7 from './Questions/Q7';
import Q6 from './Questions/Q6';
import NewFooter from "../assets/img/NewFooter.svg";
import { makeWorkation } from '../api/api_makeWorkation';
import { useNavigate } from 'react-router-dom';

const NewMakeWorkation = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [answers, setAnswers] = useState({
    sigg: '',
    start_date: '',
    end_date: '',
    work_style : '',
    work_purpose :'',
    workation2space:[],
    workation2rest:[], 
    start_sleep:'',
    end_sleep:'',
  })

  const handleSubmit = async()=>{
    
    const dataTosend= {
      sigg: answers.sigg,
      start_date: answers.start_date, //2번질문답1
      end_date: answers.end_date, //2번질문 답2
      work_style : answers.work_style, //3번질문
      work_purpose :  answers.work_purpose, //4번 질문
      workation2space: answers.workation2space.map(space => ({ space })),
      workation2rest: answers.workation2rest.map(rest => ({ rest })),  
      start_sleep: Number(answers.start_sleep), // 7번 취침시간
      end_sleep: Number(answers.end_sleep) // 7번 기상 시간
    }
    setLoading(true);
    try {
      await makeWorkation(dataTosend);
      setLoading(false);
      navigate("/timetable/allWorkation");
    } catch (error) {
      if (error.response) {
        if (error.response.data.start_date && error.response.data.start_date[0] === "Start date must be later than today.") {
          alert("시작 종료 날짜를 다시 입력해주세요 - 과거 날짜는 입력 불가합니다.");
        } else if (error.response.data.end_date && error.response.data.end_date[0] === "Start date must be later than today.") {
          alert("시작 종료 날짜를 다시 입력해주세요 - 과거 날짜는 입력 불가합니다.");
        } else if (error.response.data.start_date && error.response.data.start_date[0] === 'Start date overlaps with existing workation.') {
          alert("이미 등록된 일정이 있습니다.");
        } else if (error.response.data.end_date && error.response.data.end_date[0] === 'Start date overlaps with existing workation.') {
          alert("이미 등록된 일정이 있습니다.");
        } else if (error.response.data.non_field_errors && error.response.data.non_field_errors[0] === 'Max period of workation is a week') {
          alert("일주일 이내의 일정을 입력해주세요!");
        } else if (error.response.data.non_field_errors && error.response.data.non_field_errors[0] === 'There is workation uncompleted.') {
          alert("이미 등록된 일정이 있습니다.");
        } else if (error.response.data.sigg) {
          alert("지역을 선택해주세요.");
        } else if (error.response.data.start_date && error.response.data.start_date[0] === 'This field may not be null.') {
          alert("시작 날짜를 입력해주세요.");
        } else if (error.response.data.end_date && error.response.data.end_date[0] === 'This field may not be null.') {
          alert("끝나는 날짜를 입력해주세요.");
        } else if (error.response.data.work_purpose && error.response.data.work_purpose[0]) {
          alert("워케이션 목적을 입력해주세요.");
        } else if (error.response.data.work_style && error.response.data.work_style[0]) {
          alert("업무 방식을 입력해주세요.");
        } else {
          alert("다시 입력해주세요.");
        }
      } else {
        console.log(error);
        alert("서버와 통신 중 문제가 발생했습니다. 다시 시도해주세요.");
      }
      setLoading(false);
    }
  }

  return (
    <Wrapper>
      {loading ? <MakeWorkationLoading/> : (
        <>
        <TitleWrapper>
          <Title>몇 가지 질문으로<br/>AI가 맞춤형 시간표를 제작해 드려요!</Title>
        </TitleWrapper>
        <QuestionWrapper>
          <Q1 setAnswers={setAnswers}/>
          <Q2 setAnswers={setAnswers} answers={answers}/>
          <Q3 setAnswers={setAnswers} answers={answers}/>
          <Q4 setAnswers={setAnswers} answers={answers}/>
          <Q5 setAnswers={setAnswers} answers={answers}/>
          <Q6 setAnswers={setAnswers} answers={answers}/>
          <Q7 setAnswers={setAnswers} answers={answers}/>
        </QuestionWrapper>
        <SubmitButton onClick={handleSubmit}>워케이션 등록하기</SubmitButton>
        <Footer/>
        </>
      )}
    </Wrapper>
  )
}

export default NewMakeWorkation

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 1228px;
  
`;

const TitleWrapper = styled.div`
    width : 1228px;
    height: 260px;
    font-size: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 34px;
    background-image: url(${NewMakeTHeader});
    background-size: contain; /* 배경 이미지 크기 조정 */
    background-position: center; /* 배경 이미지 위치 조정 */
    background-repeat: no-repeat; /* 배경 이미지 반복 방지  */

`

const Title = styled.div`
  font-size: 32px;
  width: 1228px; /* 폰트 변경 후 수정 필요*/
  height: 100%;
  margin-top: 60px;
  margin-left: 150px;
  font-family: 'AppleSDGothicNeoB', sans-serif;
  cursor: default;
`
const QuestionWrapper = styled.div`
  width: 79.65%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 30px 123px;
  border: 1px solid #E3E3E3;
  border-top: none;
  //border-radius: 5px;
  background-color: #F9F9F9;
`
const SubmitButton = styled.button`
    text-align: center;
    background-color: #FA710C;
    color : white;
    border-radius: 4px;
    width: 253px;
    height: 52px;
    top: 11px;
    left: 790px;
    padding: 4px 10px 4px 10px;
    margin-top: 100px;
    margin-bottom: 130px;
    border: none;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
`
const Footer = styled.div`
    width : 1440px;
    height: 314px;
    background-image: url(${NewFooter});
    background-size: contain; /* 배경 이미지 크기 조정 */
    background-position: bottom; /* 배경 이미지 위치 조정 */
    background-repeat: no-repeat; /* 배경 이미지 반복 방지  */
`