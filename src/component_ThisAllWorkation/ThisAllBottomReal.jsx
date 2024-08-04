import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ThisAllGraph from './ThisAllGraph'
import ThisAllRetro from './ThisAllRetro'
import ThisAllTodo from './ThisAllTodo'
import { useNavigate } from 'react-router-dom'

const ThisAllBottomReal = ({workation_id, daily_workation_id}) => {
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
                <Text>일정</Text>
                <EditBtn onClick = {handleEdit}><span>edit</span></EditBtn>
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

const EditBtn = styled.div`
  background-color: #FFE0AA;
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
    //padding-bottom: 6px;
  }
`;