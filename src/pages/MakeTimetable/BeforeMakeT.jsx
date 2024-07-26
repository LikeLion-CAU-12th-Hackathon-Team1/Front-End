import React from 'react'
import styled from 'styled-components'

const BeforeMakeT = () => {
  return (
    <Wrapper>
    <Title>몇가지 질문을 통해<br/>완벽한 워라밸을 경험해보세요!</Title>
    </Wrapper>
  )
}

export default BeforeMakeT

const Wrapper = styled.div`
    width : 1200px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px; /*네브바와 겹치지않게 콘텐츠 구역 */
`
const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  width: 350px; /* 폰트 변경 후 수정 필요*/
  height: 58px;
  margin: 3%;
`