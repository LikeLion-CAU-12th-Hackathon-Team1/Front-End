import React from 'react'
import {useParams } from 'react-router-dom';
import styled from 'styled-components';
import OneWorkationPast from '../EachWorkation/OneWorkationPast';
import SideBar from '../../component/SideBar';

const OnePastWorkation = () => {
    const { id } = useParams();
    return (
      <Container>
        <TopContainer>
          <SideBar/>
          <OneWorkationPast workation_id={id}/>
        </TopContainer>
      </Container>
    )
  }
  
  export default OnePastWorkation;
 
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