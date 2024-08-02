import React from 'react'
import styled from 'styled-components'
import Pin from "../assets/img/pin.svg"
import day2 from "../assets/img/day2.svg"

const OneWorkation = ({ workation_id, SiggText, formattedStartDate, formattedEndDate, handleOne }) => {


  return (
    <One onClick={handleOne }>
        <ImgC src={day2}/>
        <TextBox>{formattedStartDate} ~ {formattedEndDate}</TextBox>
        <ImgL src={Pin}/>
        <TextBox >{SiggText} 워케이션</TextBox>
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