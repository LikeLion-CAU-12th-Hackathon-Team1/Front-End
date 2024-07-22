import React from 'react'
import styled from 'styled-components';

const Home = () => {
  return (
    <>
    <Wrapper>
        <Title>생활체육인 파이팅!!</Title>
    </Wrapper>
    </>
  )
}

export default Home

const Title = styled.div`
  font-size: 100px;
  font-weight: 700;
`;

const Wrapper = styled.div`
    width: 500px;
    height: 380px;
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
`