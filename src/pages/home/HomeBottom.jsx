import React from 'react'
import styled from 'styled-components'
import superLogo from '../../img/super.png';

const HomeBottom = () => {
  return (
    <Wrapper>
      <Title>~~~~을 통해 워라벨을 챙겨보아요~</Title>
      <StyledImg src={superLogo} alt='예시사진'/>
    </Wrapper>
    
  )
}

export default HomeBottom

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; /*역방향(가로)의 중심 */
    width : 1200px;
    height: 516px; 
    background-color: #c3c3c3;
`

const Title = styled.div`
  font-size: 16px;
  text-align: center;
`

const StyledImg = styled.img`
    width: 552px;
    height: 320px;
    border-radius: 10px;
`