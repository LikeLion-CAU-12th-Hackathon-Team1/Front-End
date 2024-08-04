import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import tagorange from "../../src/assets/img/tagorange.svg";
import loca from "../../src/assets/img/loca.svg";
import day from "../../src/assets/img/day2.svg";
import axios from 'axios';
import { getToken, token } from '../api/api_login';


const ThisAllTop = ( {workStyleText, workPurposeText,
  SiggText, formattedStartDate,
  formattedEndDate, nightB, dayB} ) => {
  //백에서 받은 데이터 넣기(날짜, 지역, 스타일)


  return (
    <Container>
      <TopBox>
      <Img src={day} className='day'/>
      <Text>{formattedStartDate } ~ {formattedEndDate} [{nightB}박 {dayB}일]</Text>
      </TopBox>
      <MiddleBox>
      <Img src={loca} className='loca' />
      <Text>'{SiggText}' 에서 만나요!</Text>
      </MiddleBox>
      <BottomBox>
      <Img src={tagorange} className='tag'/>
      <TextBox>{workPurposeText}</TextBox> 
      <TextBox>{workStyleText} </TextBox>
      </BottomBox>
    </Container>
    
  )
}

export default ThisAllTop

const Container = styled.div`
  width: 95%;
  /* height: 173px; */
  border-radius: 8px;
  border: 1px solid #FEE0AA;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #FFFFFF;
  /* flex-direction: column; */
  padding : 24px 10px 24px 10px;
`
const TopBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2%;
`
const MiddleBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2%;
`
const BottomBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2%;
`
const Img = styled.img`
  width: 30px;
  margin: 4px 0;

  &.day {
    width: 42px;
  }
  &.loca {
    margin-left: 6px;
  }
  &.tag {
    margin-left: 6px;
  }
`
const Text = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  margin: 7px 10px; //글자사이간격이걸로조절하기
  font-size: 24px;
  /* font-weight: 600; */
  font-family: 'AppleSDGothicNeoSB', sans-serif;

`
const TextBox = styled.div`
  border: 1px solid #FED39D;
  background-color: #FFFAE9;
  /* width: 45%; */
  margin: 7px 10px; //글자사이간격이걸로조절하기
  font-size: 20px;
  font-weight: 600;
  border-radius: 4px;
  text-align: center;
  padding: 5px 15px;
`