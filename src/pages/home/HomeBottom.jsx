import React from 'react'
import styled from 'styled-components'
import superLogo from '../../assets/img/super.png';
import workvalley from '../../assets/img/workvalley.svg';
import HomeBottomImg from "../../assets/img/HomeBottomImg.svg";

const HomeBottom = () => {
  return (
    <Wrapper>
      <Title>~~~~를 통해<br/>무너진 일과 쉼의 균형을 잡아봐요!</Title>
      <StyledImg src={HomeBottomImg} alt='강원도'/>
    </Wrapper>
    
  )
}

export default HomeBottom

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; /*역방향(가로)의 중심 */
    width : 1440px;
    height: 659px; 
    background: linear-gradient(#FFFFFF, #FFFAF0);
`

const Title = styled.div`
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  white-space: pre-wrap;
  margin-bottom: 50px;
`

const StyledImg = styled.img`
    width: 812px;
    height: 304px;
    border-radius: 10px;
`