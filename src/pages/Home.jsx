import React, { useEffect } from 'react'
import styled from 'styled-components';
import { loginHandler } from '../api/api_login';

const Home = () => {

  return (
    <HomeDom>
      <Wrapper>
        내용1
      </Wrapper>
      <Wrapper>
        내용2
      </Wrapper>
      <Wrapper>
        내용3
      </Wrapper>
      <Wrapper>
        내용4
      </Wrapper>
    </HomeDom>
    
  )
}

export default Home

const HomeDom = styled.div`
  padding-top: 5px; /* NavDom과 겹s치지 않도록 마진 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%; /* 전체 너비로 설정 */
  
  /*box-sizing: border-box; /* 패딩과 테두리를 너비에 포함 */
  
  min-width: 1200px;
  min-height: 720px;
  
`


const Wrapper = styled.div`
    
    width : 100%;
    min-width: 1200px;
    min-height: 720px; /*최소높이 설정으로 컨텐츠 보이도록*/
    background-color: #c3c3c3;
    
    padding: 1rem;
    margin: 10px 0;
    
`

const Title = styled.div`
  font-size: 100px;
  font-weight: 700;
`;
