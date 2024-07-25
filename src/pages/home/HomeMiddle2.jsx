import React from 'react';
import styled from 'styled-components';
import superLogo from '../../img/super.png';

const HomeMiddle2 = () => {
  return (
    <Wrapper>
      <Title>워케이션이 뭐지?</Title>
      <SemiTitle>워케이션에 대한 세부 설명</SemiTitle> 
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
    width : 1200px;
    min-height: 720px; //최소높이 설정으로 컨텐츠 보이도록
    background-color: #ff9696;
    
    /* padding: 1rem;
    margin: 10px 0; */
    margin-bottom: 10px;
`

const Title= styled.div`
  font-size: 16px;
  text-align: center;
`

const SemiTitle = styled.div`
  font-size: 15px;
  text-align: center;
`

const StyledImg = styled.img`
    width: 552px;
    height: 135px;
    border-radius: 1rem;
`