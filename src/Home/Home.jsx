import React from 'react'
import styled from 'styled-components';
import HomeTop from './HomeTop';
import HomeMiddle1 from './HomeMiddle1';
import HomeMiddle2 from './HomeMiddle2';
import HomeBottom from './HomeBottom';
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
  align-items: center;
`

const Footer = styled.div`
width : 1440px;
height: 300px;
background-image: url(${NewFooter});
`