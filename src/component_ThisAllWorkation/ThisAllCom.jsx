import React, { useState } from 'react'
import styled from 'styled-components';
import ThisAllTop from './ThisAllTop';
import ThisAllMiddle from './ThisAllMiddle';
import ThisAllBottom from './ThisAllBottom';

const ThisAllCom = () => {

  return (
    <Container>
      <ThisAllTop ></ThisAllTop>
      <ThisAllMiddle></ThisAllMiddle>
      <ThisAllBottom></ThisAllBottom>
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
  /* height: 730px; */
  background-color: #FFFAF0;
  box-sizing: border-box;
  border-top: 66px;
  border-radius: 6px;
  padding: 18px 17px 18px 17px;
`;