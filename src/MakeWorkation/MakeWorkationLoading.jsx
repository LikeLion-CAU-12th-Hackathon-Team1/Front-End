import React from 'react'
import styled from 'styled-components'
import day from"../../src/assets/img/This.gif";

const Loading = () => {
 
  return (
    <LoadingBox>
    <Text>
        맞춤형 시간표 제작하는 중
        <GImg src = {day} />
    </Text>
    </LoadingBox>
  )
}

export default Loading

const LoadingBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  flex-direction: column;
  margin-top: 46px;
`
const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
`
const GImg = styled.img`
    width: 120px;
    margin-top: 30px;
`