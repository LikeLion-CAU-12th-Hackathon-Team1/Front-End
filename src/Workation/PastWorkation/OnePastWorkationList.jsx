import React from 'react'
import styled from 'styled-components'
import Pin from "../../assets/img/pin.svg"
import day2 from "../../assets/img/day2.svg"
import { delPastWorkation } from '../../api/api_PastTimeTable'

const OnePastWorkationList = ({ workation_id, SiggText, formattedStartDate, formattedEndDate, handleOne, fetchAllWorkation }) => {
    const handleDeleteBtn = async () => {
        try {
            await delPastWorkation(workation_id);
            fetchAllWorkation();
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    }
  return (
    <One onClick={handleOne }>
        <ImgC src={day2}/>
        <TextBox>{formattedStartDate} ~ {formattedEndDate}</TextBox>
        <ImgL src={Pin}/>
        <TextBox >{SiggText} 워케이션</TextBox>
        <DeleteBtn onClick={(e) => { e.stopPropagation(); handleDeleteBtn(); }}>x</DeleteBtn>
    </One>
  )
}

export default OnePastWorkationList

const One = styled.div`
    width: 93%;
    height: 56px;
    border: 1px solid #FEE0AA;
    background-color: #FFFFFF;
    border-radius: 8px;
    padding: 3px 32px;
    margin-bottom: 2%;
    display: flex;
    align-items: center;
    cursor: pointer;
`
const ImgC = styled.img`
    width: 32px;
    height: 32px;
`
const ImgL = styled.img`
    width: 32px;
    height: 32px;
    margin-left: -7.5%;
`
const TextBox = styled.div`
    font-size: 20px;
    width: 41%;
    letter-spacing: -0.02em; 
    margin-left: 1%;
    font-family: 'AppleSDGothicNeoSB', sans-serif;
    display: flex;
    align-items: center;

`
const DeleteBtn = styled.div`
    width: 21px;
    height: 21px;
    border:2px solid #DBDBDB;
    background-color: #F0F0F0;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: 10%;
    color: #c2c2c2;
    font-size: 28px;
    font-weight:400;
`