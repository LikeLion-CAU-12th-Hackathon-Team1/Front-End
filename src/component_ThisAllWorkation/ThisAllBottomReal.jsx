import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ThisAllGraph from './ThisAllGraph'
import ThisAllRetro from './ThisAllRetro'
import ThisAllTodo from './ThisAllTodo'
import Img12 from "../assets/img/12.svg"
import { useNavigate } from 'react-router-dom'

const ThisAllBottomReal = ({workation_id, daily_workation_id, selectedDailyWorkationId}) => {
    //어느 여행인지 워케이션아이디와 함께 버튼이 눌린 데일리워케이션아이디 하기
    const navigate = useNavigate();


    const handleEdit = ()=>{
        console.log(daily_workation_id)
        navigate(`/timetable/today/${daily_workation_id}`)
    }

  return (
    <Container>
        <InnerBox>
            <TextBox>
                <Text> 세부 일정</Text>
                <EditBtn src={Img12} onClick = {handleEdit} />
            </TextBox>
            <ContentBox>
                <LeftBox>
                    <ThisAllGraph daily_workation_id={daily_workation_id}/>
                    <ThisAllRetro daily_workation_id={daily_workation_id}/>
                </LeftBox>
                <ThisAllTodo daily_workation_id={daily_workation_id}/>
            </ContentBox>
        </InnerBox>
    </Container>
  )
}

export default ThisAllBottomReal

const Container = styled.div`
width: 100%;
/* height: 420px; */
border-radius: 8px;
border-color: #FEE0AA;
margin-top: 2%;
`
const InnerBox = styled.div`
display:flex;
flex-direction: column;
    width: 100%;
    height: 372px;
    background-color: #FFFDF9;
    /* border-color: #FEE0AA; */
`
const TextBox = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
margin: 1%;
`
const Text = styled.div`
display:flex;
flex-direction:row;
align-items:center;
    font-size: 24px;
    font-weight: 600;
    line-height: 28.8px;
    letter-spacing: -0.02em;
`
const ContentBox = styled.div`
    display:flex;
    width: 100%;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    
`
const LeftBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const EditBtn = styled.img`
    width: 4%;
    /* z-index: 10; */
  /* background-color: #FFE0AA;
  border-radius: 5px;
  width: 55px;
  height: 32px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  margin: 0;
  span {
    color: #FF831C;
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
    //padding-bottom: 6px; */

`

const DayCount = styled.div`
  display: inline-block;
  width: 24%;
  height: 32px;
  text-align: center;
  background-color: ${({ $clicked }) => ($clicked ? '#FF6B00' : '#FED39D')};;
  border-radius: 4px;
  border: 0.5px solid #FF831C;
  padding: 5px 10px 4px 10px;
  box-sizing: border-box;
  gap: 10px;
  /* font-weight: 550; */
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: ${({ $clicked }) => ($clicked ? '#FFFFFF' : '#FF6B00')};
  margin-bottom: 3%;
  font-family: 'AppleSDGothicNeoSB', sans-serif;
  justify-content: center;
  align-items: center;

`;
