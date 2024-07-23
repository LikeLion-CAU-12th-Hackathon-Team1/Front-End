import React, { useEffect } from 'react'
import styled from 'styled-components';
import { loginHandler } from '../api/api_login';
// import { testGet, testKakaoLogin, testPost } from '../api/api_login';

const Home = () => {

  /* 이하는 백 연결 테스트 코드 */

  // useEffect(() => {
  //   const testFetchData = async () => {
  //     const testGetData = await testGet();
  //     console.log(testGetData);

  //     const testGetKakaoLoginData = await testKakaoLogin();
  //     console.log(testGetKakaoLoginData);

  //     const testPostData = await testPost();
  //     console.log(testPostData);
  //   }
  //   testFetchData();
  // }, []);

  return (
    <>
    <Wrapper>
        <Title>생활체육인 파이팅!!</Title>
        <button onClick={loginHandler}>카카오 로그인 테스트</button>
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