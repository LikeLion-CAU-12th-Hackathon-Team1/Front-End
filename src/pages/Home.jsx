import React from 'react'
import styled from 'styled-components';
import HomeTop from './home/HomeTop';
import HomeMiddle1 from './home/HomeMiddle1';
import HomeMiddle2 from './home/HomeMiddle2';
import HomeBottom from './home/HomeBottom';

const Home = () => {

  return (
    <HomeDom>
      <HomeTop/>
      <HomeMiddle1/>
      <HomeMiddle2/>
      <HomeBottom/>
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
  
  /*box-sizing: border-box; /* 패딩과 테두리를 너비에 포함 */
  
  //min-width: 1200px;
  min-height: 720px;
  `
