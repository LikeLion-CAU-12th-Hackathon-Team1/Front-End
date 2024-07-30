import React from 'react'
import styled from 'styled-components';
import Home_1 from "../../assets/img/Home_1.svg";

const HomeTop = () => {

  const smoothScrollTo = (y)=>{
    window.scrollTo({
      top:y,
      left:0,
      behavior:'smooth'
    });
  }

  const BtnClick = () => {
    smoothScrollTo(635); //2번째랜딩페이지로 위치이동
  }
  return (
    <Wrapper>
      <TitleContainer>
        <Title>어디서든 일하고,<br />어디서든 삶을 즐길 수 있도록</Title>
        <SemiTitle>워케이션을 떠난 프리랜서 맞춤형 워라밸 파트너</SemiTitle>

        <Button onClick={BtnClick}>자세히 보기</Button>
      </TitleContainer>
      <LogoContainer>
        <Img />
      </LogoContainer>
    </Wrapper>
    
  )
}

export default HomeTop

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width : 1440px;
    height: 695px;
    //background-color: #FFFAF0;
    background-image: url(${Home_1});
    background-size: contain; /* 배경 이미지 크기 조정 */
    background-position: center; /* 배경 이미지 위치 조정 */
    background-repeat: no-repeat; /* 배경 이미지 반복 방지  */
    
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  white-space: pre-wrap;
  width: 424px;
  height: 350px;

  margin-top: 118px;
`
const Title = styled.div`
  font-size :34px;
  font-weight: 800;
  width: 460px;
  height: 88px;
`
const LogoContainer = styled.div`
  width: 400px;
  height: 350px;

  margin-top: 118px;

  //border: 1px solid;
`
const Img = styled.img`
  
`
const SemiTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 100px;
`

const Button = styled.button`
  background-color: #FF831C;
  color: white;
  font-size: 20px;
  font-weight: 700;
  width: 212px;
  height: 52px;
  border: 0px;
  border-radius: 6px;
  padding: 4px 35px 4px 35px;
  gap: 10px;
`