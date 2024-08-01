import React from 'react'
import styled from 'styled-components'

const ThisAllMiddle = () => {
  return (
    <Container>
        <TextBox>모든일정</TextBox>
        <TableBox>
        {[1,2,3,4,5,6].map((item)=>{
            return(
            <InnerTable>
                <DayCount>{item}</DayCount>
                <Table></Table>
            </InnerTable>
            )
        })}
        </TableBox>
    </Container>
  )
}

export default ThisAllMiddle

const Container = styled.div`
    width: 976px;
    height: 510px;
    border: 2px solid black;
`

const TextBox = styled.div`
    width: 976px;
    height: 32px;
    border: 2px solid black;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -2%;
    color: #222222;
`

const TableBox = styled.div`
    width: 976px;
    height: 458px;
    border: 2px solid black;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
`

const InnerTable = styled.div`
min-width: 306px;
height: 458px;
border: 2px solid black;
    
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
    
`