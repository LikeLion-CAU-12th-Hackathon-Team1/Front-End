import React from 'react'
import styled from 'styled-components'

const HomeMiddle1 = () => {
  return (
    <Wrapper>
      <h2>늘어난 재택</h2>
      <h2>But, 무너진 일과 휴식의 구분</h2>

    </Wrapper>
    
  )
}

export default HomeMiddle1

const Wrapper = styled.div`
    background-color: #ffca9f;
    text-align: center;
    
    width : 100%;
    min-width: 1200px;
    min-height: 720px; /*최소높이 설정으로 컨텐츠 보이도록*/
    
    /* padding: 1rem;
    margin: 10px 0; */
    margin-bottom: 10px;
    font-size: 20px;
`