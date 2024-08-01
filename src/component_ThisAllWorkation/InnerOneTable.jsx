import React from 'react'
import styled from 'styled-components';
import InnerOneTimeTable from './InnerOneTimeTable';

const InnerOneTable = ({item}) => {


  return (
    <Container>
    <DayCount>{item}일차</DayCount>
    <Table>
        {[0,1,2,3,4,5,6,7,8,9,10,
        11,12,13,14,15,16,17,18,19,20,
        21,22,23].map(()=>{
        return(
        <InnerOneTimeTable></InnerOneTimeTable>
        )})}
        
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
  width: 24%;
  height: 32px;
  text-align: center;
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
  margin-bottom: 3%;
`;

const Table = styled.div`
width: 306px;
height: 416px;
background-color: #FFF2D6;
border: 0.5px solid black;
padding: 16px 14px;
`
