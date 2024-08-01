import React from 'react'
import styled from 'styled-components'

const InnerOneTimeTable = () => {
  return (
    <Container>
        <WorkTable></WorkTable>
        <RestTable></RestTable>
    </Container>
  )
}

export default InnerOneTimeTable

const Container = styled.div`
display:flex;
flex-direction: row;
width : 300px;
height: 16px;
border: 1px solid red;
`
const WorkTable = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 130px;
  height: 16px;
  background-color: ${({ $isActive }) => ($isActive ? '#FFA837' : '#FFFFFF')};
  border-radius: 100px;
  margin-right: 15px;
`
const RestTable = styled.div`
    display: flex;
  flex-direction: row;
  align-items: center;
  width: 130px;
  height: 16px;
  background-color: ${({ $isActive }) => ($isActive ? '#FFA837' : '#FFFFFF')};
  border-radius: 100px;
  `