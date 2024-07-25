import React from 'react'
import styled from 'styled-components'
import superLogo from '../img/super.png';

const InsideHomeM1 = () => {
  return (
    <Inside>
        <StyledImg src={superLogo} alt='예시사진' />
        <Title>'분명히 재택이라서 처음엔 좋았는데 막상하고 보니 안좋은ㄱ같아요....'</Title>
        <Author>프리랜서 디자이너 김모씨</Author>
    </Inside>
  )
}

export default InsideHomeM1


const Inside = styled.div`
    width: 25%;
    height: 230px;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
`
const StyledImg = styled.img`
    width: 100%;
    height: auto;
    border-radius: 1rem;
`

const Title = styled.div`
    font-size: 12px;
    text-align: center;
`
const Author = styled.div`
    font-size: 10px;
    text-align: center;
`
