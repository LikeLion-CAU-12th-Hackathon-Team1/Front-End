import React from 'react';
import styled from 'styled-components';
import superLogo from '../../assets/img/super.png';
import workvalley from '../../assets/img/workvalley.svg';


const HomeMiddle2 = () => {
  return (
    <Wrapper>
      <Title>워케이션이란?</Title>
      <SemiTitle>일(Work)과 휴가(Vacation)의 합성어로, 원하는 곳에서 업무와
      휴가를 동시에 할 수 있는 새로운 근무제도</SemiTitle> 
      <StyledImg src={superLogo} alt='예시사진' />
      <StyledImg src={superLogo} alt='예시사진' />
      
    </Wrapper>
    
  )
}

export default HomeMiddle2

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center; /*역방향(가로)의 중심 */
    width : 1440px;
    height: 800px;
`

const Title= styled.div`
  width: 426px;
  height: 20px;
  font-size: 30px;
  font-weight:700;
  text-align: center;
  padding-top: 50px;
`

const SemiTitle = styled.div`
  width: 570px;
  height: 48px;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
`

const StyledImg = styled.img`
    width: 812px;
    height: 221px;
    border-radius: 10px;
    opacity: 50%;
`