import React, { useEffect } from 'react'
import styled from 'styled-components'
import Pin from "../assets/img/pin.svg"
import day2 from "../assets/img/day2.svg"
import { delPastWorkation } from '../api/api_PastTimeTable'

const OneWorkation = ({ workation_id, SiggText, formattedStartDate, formattedEndDate, handleOne, handleThisAll }) => {

    // useEffect(()=>{
    //     const handleDeleteBtn = () => {
    //     try{
    //         delPastWorkation(workation_id)
    //     }
    //     catch (error) {
    //         console.error(error.data)
    //     }
    //     handleDeleteBtn();
    // }
    // },[workation_id])
    
    const handleDeleteBtn = async () => {
        try {
            await delPastWorkation(workation_id);
            handleThisAll();
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message); // 수정수정: 에러 메시지 출력 수정
        }
    }
   


  return (
    <One onClick={handleOne }>
        <ImgC src={day2}/>
        <TextBox>{formattedStartDate} ~ {formattedEndDate}</TextBox>
        <ImgL src={Pin}/>
        <TextBox >{SiggText} 워케이션</TextBox>
        <DeleteBtn onClick={(e) => { e.stopPropagation(); handleDeleteBtn(); }}></DeleteBtn>
    </One>
  )
}

export default OneWorkation

const One = styled.div`
    width: 93%;
    height: 56px;
    border: 1px solid #FEE0AA;
    background-color: #FFFFFF;
    border-radius: 8px;
    padding: 3px 32px;
    margin-bottom: 2%;
    display: flex;
    /* justify-content: center; */
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
`
const TextBox = styled.div`
    font-size: 20px;
    font-weight: 600;
    width: 41%;
    letter-spacing: -0.02em; 
    margin-left: 1%;
`
const DeleteBtn = styled.div`
    width: 21px;
    height: 21px;
    border:2px solid #DBDBDB;
    background-color: #F0F0F0;
    border-radius: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    margin-left: 10%;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 1;
    }

    &::before {
    content: '✕';
    color: #c2c2c2;
    font-size: 18px;
    font-weight:800;
    line-height: 1;
    position: absolute;
  }
`