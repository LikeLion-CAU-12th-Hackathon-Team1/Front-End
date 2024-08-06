import React from 'react'
import styled from 'styled-components';
import HomeTop from './home/HomeTop';
import HomeMiddle1 from './home/HomeMiddle1';
import HomeMiddle2 from './home/HomeMiddle2';
import HomeBottom from './home/HomeBottom';
import NewFooter from "../assets/img/newnewFooter.svg";

const Home = () => {

  return (
    <HomeDom>
      <HomeTop/>
      <HomeMiddle1/>
      <HomeMiddle2/>
      <HomeBottom/>
      <Footer/>
    </HomeDom>
    
  )
}

export default Home

const HomeDom = styled.div`
  padding-top: 5px; /* NavDom과 겹s치지 않도록 마진 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90vw; /* 전체 너비로 설정 */
  align-items: center;

  @media (max-width: 360px) {
        width: 360px;
  }
  
  /*box-sizing: border-box; /* 패딩과 테두리를 너비에 포함 */
  
  //min-width: 1200px;
  /* min-height: 720px; */
  `
const Footer = styled.div`
width : 1440px;
height: 300px;
background-image: url(${NewFooter});
background-size: contain; /* 배경 이미지 크기 조정 */
background-position: bottom; /* 배경 이미지 위치 조정 */
background-repeat: no-repeat; /* 배경 이미지 반복 방지  */

@media (max-width: 360px) {
        /* width: 150px; */
        /* margin-right: -10px; */
        margin-left: 230px;
  }
`