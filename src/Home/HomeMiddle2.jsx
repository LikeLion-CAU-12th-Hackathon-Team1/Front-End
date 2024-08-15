import React from 'react';
import styled from 'styled-components';
import HP1 from '../../src/assets/img/HP1.jpg';
import HP2 from '../../src/assets/img/HP2.jpg';


const HomeMiddle2 = () => {
  return (
    <Wrapper>
      <Title>워케이션이란?</Title>
      <SemiTitle>일(Work)과 휴가(Vacation)의 합성어로, 원하는 곳에서 업무와
      휴가를 동시에 할 수 있는 새로운 근무제도</SemiTitle> 
      <StyledImg src={HP1} alt='예시사진' />
      <StyledImg src={HP2} alt='예시사진' className='two' />
      
    </Wrapper>
    
  )
}

export default HomeMiddle2

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; /*역방향(가로)의 중심 */
    width : 1440px;
    height: 800px;
`

const Title= styled.div`
  font-family: 'AppleSDGothicNeoEB', sans-serif;
  font-size: 30px;
  /* font-weight:700; */
  text-align: center;
  /* padding-top: 0%; */
  padding-bottom: 1%;
  letter-spacing: -0.02em;
  margin-top: 30px;
  cursor: default;

  @media (max-width: 360px) {
    flex-direction: column;
    justify-content: space-between;
    height: 65%;
    margin-left: 10%;
    margin-top: 8%
  }
`

const SemiTitle = styled.div`
  font-family: 'AppleSDGothicNeoM', sans-serif;
  width: 390px;
  height: 48px;
  font-size: 18px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #646464;
  line-height: 25px;
  padding-bottom: 2%;
  margin-bottom: 10px;
  cursor: default;

  @media (max-width: 360px) {
    flex-direction: column;
    justify-content: space-between;
    height: 65%;
    margin-left: 10%;
    margin-top: -5%;
    margin-bottom: -2%;
  }
`

const StyledImg = styled.img`
    width: 812px;
    height: 221px;
    border-radius: 10px;
    margin-top: 5px;

    &.two {
      margin-top: 20px;
    }

    @media (max-width: 360px) {
    margin-bottom: 20px;
    height: 65%;
    margin-left: 10%;
    /* margin-top: -10%; */
  }
`