// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const REST_API_KEY = "872ea408194165abb49cfa9b9fe7516a"; // 우리 서비스 카카오 dev key
// const REDIRECT_URI1 = "http://localhost:3000/oauth"; // 백한테 추가해달라고 한 우리 주소 // 추후 배포 주소 추가 필요
// const kakao_login_uri = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI1}&response_type=code`

// const baseURL = `https://saengchaein.r-e.kr`;

// // Home.jsx의 카카오 로그인 테스트 버튼에 연결
// // 인가 uri로 연결
// export const loginHandler = () => {
//   window.location.href = kakao_login_uri;
// };

// // 훅 쓰기 위해서 리액트 함수형 컴포넌트 사용(OAuth)
// const OAuth = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       const code = new URL(window.location.href).searchParams.get("code");
//       if (code) {
//         try {
//           console.log(code); // 파싱 결과 확인용
//           const result = await axios.post(`${baseURL}/oauth/?code=${ code }`); // 추후 post 메서드로 수정 필요
//           console.log(result.data); // 액세스 토큰 취득
//           navigate("/login"); // loading 후 현재 카카오 인가 페이지에서 바로 login 화면으로 이동
//         } catch (error) {
//           console.error("Error fetching OAuth data", error); // 에러 메세지 확인용
//         }
//       }
//     };

//     fetchData();
//   }, [navigate]); // 의존성 배열 비워도 되지만 리액트 훅의 규칙 - 훅이 사용하는 모든 외부 의존성을 의존성 배열에 포함(버그방지, 명시성)

//   return <div>Loading...</div>;
// };

// export default OAuth;



import axios from "axios";
import { createBrowserHistory } from "history";

const REST_API_KEY = "872ea408194165abb49cfa9b9fe7516a";
const REST_API_KEY1 = "6eeb65005292f7f598e7c1e085a21e3a"; // 나중에 지울 api
const REDIRECT_URI1 = "http://localhost:3000/oauth";
const kakao_login_uri = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY1}&redirect_uri=${REDIRECT_URI1}&response_type=code`;

const baseURL = `https://saengchaein.r-e.kr`;

// Home.jsx의 카카오 로그인 테스트 버튼에 연결
// 인가 uri로 연결

export const loginHandler = () => {
  window.location.href = kakao_login_uri;
};

// OAuth 처리를 위한 함수
export const handleOAuth = async () => {
  const history = createBrowserHistory();
  const code = new URL(window.location.href).searchParams.get("code");

  if (code) {
    try {
      const result = await axios.get(`${baseURL}/account/kakao/callback/?code=${code}`);

      localStorage.setItem("access", result.data.access_token); // 받아온 액세스 토큰을 로컬스토리지에 저장하여 관리
      localStorage.setItem("refresh", result.data.refresh_token); // 받아온 리프레시 토큰을 로컬스토리지에 저장하여 관리
      localStorage.setItem("nickname", result.data.user.nickname); 
      localStorage.setItem("email", result.data.user.email); 
      localStorage.setItem("profile", result.data.user.profile);
      history.push("/"); // 로그인 페이지로 이동
      window.location.reload(); // 페이지 새로고침
    } catch (error) {
      console.error("Error fetching OAuth data", error); // 에러 메세지 확인용
    }
  }
};

// OAuth 처리를 위해 페이지 로드 시 handleOAuth 호출
window.onload = () => {
  handleOAuth();
};
