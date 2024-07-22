import React, { useEffect } from 'react'
import styled from 'styled-components';
import { testGet, testKakaoLogin, testPost } from '../api/api';

const Home = () => {

  useEffect(() => {
    const testFetchData = async () => {
      const testGetData = await testGet();
      console.log(testGetData);

      const testGetKakaoLoginData = await testKakaoLogin();
      console.log(testGetKakaoLoginData);

      const testPostData = await testPost();
      console.log(testPostData);
    }
    testFetchData();
  }, []);

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