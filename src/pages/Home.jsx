import React, { useEffect } from 'react'
import styled from 'styled-components';
import { testGet, testKakaoLogin, testPost } from '../api/api_login';

const Home = () => {
  const REST_API_KEY = "872ea408194165abb49cfa9b9fe7516a";
  const REDIRECT_URI1 = "https://saengchaein.r-e.kr/account/kakao/callback/";
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI1}&response_type=code`

  const loginHandler = () => {
    window.location.href = link;
  };

  useEffect(() => {
    const testFetchData = async () => {
      const testGetData = await testGet();
      console.log(testGetData);

      // const testGetKakaoLoginData = await testKakaoLogin();
      // console.log(testGetKakaoLoginData);

      const testPostData = await testPost();
      console.log(testPostData);
    }
    testFetchData();
  }, []);

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