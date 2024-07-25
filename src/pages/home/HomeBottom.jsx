import React from 'react'
import styled from 'styled-components'
import superLogo from '../../img/super.png';

const HomeBottom = () => {
  return (
    <Wrapper>
      <Title>~~~~을 통해 워라벨을 챙겨보아요~</Title>
      <ImgBox>
        <StyledImg src={superLogo} alt='예시사진'/>
        <StyledImg src={superLogo} alt='예시사진'/> 
      </ImgBox>
      <ImgBox>
        <StyledImg src={superLogo} alt='예시사진'/>
        <StyledImg src={superLogo} alt='예시사진'/> 
      </ImgBox>
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
    //min-width: 1200px;
    min-height: 720px; /*최소높이 설정으로 컨텐츠 보이도록*/
    background-color: #c3c3c3;
    
    /* padding: 1rem;
    margin: 10px 0; */
    margin-bottom: 10px;
    
`

const Title = styled.div`
  font-size: 16px;
  text-align: center;
`

const ImgBox = styled.div`
  display: flex;
  justify-content: center;

`

const StyledImg = styled.img`
    width: 2%;
    height: 2%;
    border-radius: 1rem;
`