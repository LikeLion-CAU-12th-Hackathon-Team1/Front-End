import React from 'react'
import styled from 'styled-components'
import tagorange from "../../assets/img/tagorange.svg";
import loca from "../../assets/img/loca.svg";
import day from "../../assets/img/day2.svg";


const OneWorkationTextBox = ( {workStyleText, workPurposeText,
  SiggText, formattedStartDate,
  formattedEndDate, nightB, dayB} ) => {
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

export default OneWorkationTextBox

const Container = styled.div`
  width: 95%;
  border-radius: 8px;
  border: 1px solid #FEE0AA;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #FFFFFF;
  padding : 24px 10px 24px 10px;
`
const TopBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2%;
  cursor: default;
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
  width: 100%;
  margin: 7px 10px;
  font-size: 24px;
  font-family: 'AppleSDGothicNeoSB', sans-serif;
  cursor: default;

`
const TextBox = styled.div`
  border: 1px solid #FED39D;
  background-color: #FFFAE9;
  margin: 7px 10px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 4px;
  text-align: center;
  padding: 5px 15px;
  cursor: default;
`