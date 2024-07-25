import React from 'react'
import styled from 'styled-components'

const HomeMiddle1 = () => {
  return (
    <Wrapper>
      <div>HomeMiddle1</div>
    </Wrapper>
    
  )
}

export default HomeMiddle1

const Wrapper = styled.div`
    
    width : 1200px;
    //min-width: 1200px;
    min-height: 720px; /*최소높이 설정으로 컨텐츠 보이도록*/
    background-color: #c3c3c3;
    
    /* padding: 1rem;
    margin: 10px 0; */
    margin-bottom: 10px;
    font-size: 20px;
`