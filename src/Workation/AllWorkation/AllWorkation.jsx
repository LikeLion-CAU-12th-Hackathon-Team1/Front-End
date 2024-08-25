import React from 'react'
import styled from 'styled-components'
import OneWorkation from '../EachWorkation/OneWorkation';
import SideBar from '../../component/SideBar';

const AllWorkation = () => {
    return (
      <Container>
        <TopContainer>
          <SideBar/>
          <OneWorkation/>
        </TopContainer>
      </Container>
    )
  }
  
  export default AllWorkation;
  
  const Container = styled.div`
    width:1228px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    margin-top: 20px;
  `
  const TopContainer = styled.div`
    width: 1228px;
    display: flex;
    flex-direction: row;
    margin-top: 66px;
  `