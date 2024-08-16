import React from 'react'
import styled from 'styled-components'
import HomeBottomImg from "../../src/assets/img/NewG49.svg";
import HomeBT2 from '../../src/assets/img/Frame.svg';

const HomeBottom = () => {
  return (
    <Wrapper>
      <Title src={HomeBT2}/>
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
    height: 650px; 
    background: linear-gradient(#FFFFFF, #FFFAF0);
`


const Title = styled.img`
   width: 360px;
   height: 82px;
   margin-bottom: 30px;
`

const StyledImg = styled.img`
    width: 812px;
    height: 440px;
    border-radius: 10px;
`