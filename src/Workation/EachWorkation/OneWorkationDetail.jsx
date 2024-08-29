import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ThisAllGraph from './OneWorkationGraph'
import ThisAllRetro from './OneWorkationRetrospect'
import ThisAllTodo from './OneWorkationTodo'
import { useLocation, useNavigate } from 'react-router-dom'

const OneWorkationDetail = ({daily_workation_id}) => {
    //어느 여행인지 워케이션아이디와 함께 버튼이 눌린 데일리워케이션아이디 하기
    const navigate = useNavigate();

    const locations = useLocation();
    const [isNotPast, setIsNotPast] = useState(true);
    useEffect(()=>{
        if(locations.pathname.includes('pastWorkation')){
            setIsNotPast(false)
        }
    })
    const handleEdit = ()=>{
        navigate(`/timetable/today/${daily_workation_id}`)
    }

  return (
    <Container>
        <InnerBox>
            <TextBox>
                <Text> 세부 일정</Text>
                {isNotPast ? (<EditBtn  onClick = {handleEdit}>edit</EditBtn>):(<></>)}
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

export default OneWorkationDetail

const Container = styled.div`
width: 100%;
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
letter-spacing: -0.02em;
cursor: default;
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

const EditBtn = styled.button`
    width: 4%;
    z-index: 10; 
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
  font-size: 20px;
  border: none;
  color : #FF831C;
  span {
    color: #FF831C;
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
    padding-bottom: 6px;}
    cursor: pointer;
`
