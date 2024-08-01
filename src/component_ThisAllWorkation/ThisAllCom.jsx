import React from 'react'
import styled from 'styled-components';
import ThisAllTop from './ThisAllTop';
import ThisAllMiddle from './ThisAllMiddle';

const ThisAllCom = () => {
  return (
    <Container>
      <ThisAllTop></ThisAllTop>
      <ThisAllMiddle></ThisAllMiddle>
    </Container>
  )
}

export default ThisAllCom

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1020px;
  height: 730px;
  background-color: #FFFAF0;
  box-sizing: border-box;
`;