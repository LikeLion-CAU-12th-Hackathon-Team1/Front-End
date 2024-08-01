import React from 'react'
import styled from 'styled-components'
import InnerOneTable from './InnerOneTable'

const ThisAllMiddle = () => {
    //빈배열 안에 저기서 날자 - +1 ㅐ서 넣어
  return (
    <Container>
        <TextBox>모든일정</TextBox>
        <TableBox>
        {[1,2,3,4,5,6].map((item)=>{
           const itemNum = item;
            return(
            <InnerOneTable key = {itemNum} item={itemNum}>
            </InnerOneTable>
            )
        })}
        </TableBox>
    </Container>
  )
}

export default ThisAllMiddle

const Container = styled.div`
    width: 97%;
    /* height: 510px; */
    /* border: 2px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2%;
`

const TextBox = styled.div`
    width: 100%;
    /* height: 32px; */
    /* border: 2px solid black; */
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -2%;
    color: #222222;
`

const TableBox = styled.div`
    width: 100%;
    /* height: 458px; */
    /* border: 2px solid black; */
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    margin-top: 1%;
    //background-color: #FFF2D6; //잇을때 디자인 물어보기
    border: none;
    border-radius: 8px;
    padding: 28px 14px 16px 14px;
    justify-content: space-between;
    
`

const InnerTable = styled.div`
    min-width: 306px;
    height: 458px;
/* border: 2px solid black; */
    /* margin: 10px ; */
`