import React from 'react'
import styled from 'styled-components';

const InnerOneTable = ({item}) => {


  return (
    <Container>
    <DayCount>{item}</DayCount>
    <Table>
        <OneTable>
            <WorkTable></WorkTable>
            <RestTable></RestTable>
        </OneTable>
        </Table>
    </Container>
    
  )
}

export default InnerOneTable

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const DayCount = styled.div`
  display: inline-block;
  width: 67px;
  height: 32px;
  background-color: #FED39D;
  border-radius: 4px;
  border: 0.5px solid #FF831C;
  padding: 4px 10px 4px 10px;
  box-sizing: border-box;
  gap: 10px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #FF6B00;
`;

const Table = styled.div`
width: 306px;
height: 416px;
background-color: #FFF2D6;
border: 0.5px solid black;
`
const OneTable = styled.div`
width : 300px;
height: 16px;
border: 1px solid red;
`
const WorkTable = styled.div`

    
`
const RestTable = styled.div`
    
`