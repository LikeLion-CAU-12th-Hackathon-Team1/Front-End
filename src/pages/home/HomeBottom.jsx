import React from 'react'
import styled from 'styled-components'
import superLogo from '../../assets/img/super.png';
import workvalley from '../../assets/img/workvalley.svg';
import HomeBottomImg from "../../assets/img/HomeBottomImg.svg";
import OrangeLogo from "../../assets/img/OrangeLogo.svg";
import HomeBT2 from '../../assets/img/HomeBT2.svg';

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
    height: 659px; 
    background: linear-gradient(#FFFFFF, #FFFAF0);
`


const Title = styled.img`
   width: 393px;
   height: 82px;
   z-index: 5;
   margin-bottom: 30px;
`

const StyledImg = styled.img`
    width: 812px;
    height: 304px;
    border-radius: 10px;
`