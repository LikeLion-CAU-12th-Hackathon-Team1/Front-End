import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PastWorkationList from './PastWorkationList';
import SideBar from '../../component/SideBar';

const PastWorkation = () => {

    return (
      <Container>
        <TopContainer>
          <SideBar/>
          <PastWorkationList/>
        </TopContainer>
      </Container>
    )
  }
  
  export default PastWorkation;
  
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