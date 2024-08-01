import React from 'react'
import styled from 'styled-components'

const ThisAllTop = () => {
  //백에서 받은 데이터 넣기
  return (
    <Container>
      <Text>2024/07/23</Text>
      <Text>강원도 속초</Text>
      <Text>느긋하게 오후부터...</Text>
    </Container>
  )
}

export default ThisAllTop

const Container = styled.div`
  width: 974px;
  height: 173px;
  border-radius: 8px;
  border: 1px solid #FEE0AA;
  display: flex;
  justify-content: center;
  background-color: #FFFFFF;
  flex-direction: column;
`

const Text = styled.div`
  border: 1px solid black;

`