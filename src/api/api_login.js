import axios from "axios";
import { createBrowserHistory } from "history";

const REST_API_KEY = "872ea408194165abb49cfa9b9fe7516a";
const REST_API_KEY1 = "6eeb65005292f7f598e7c1e085a21e3a"; // 나중에 지울 api
const REDIRECT_URI1 = "http://localhost:3000/oauth";
const REDIRECT_URI2 = "https://workvalley.netlify.app/oauth";
const kakao_login_uri = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI2}&response_type=code`;

export const loginHandler = () => {
  window.location.href = kakao_login_uri;
};

// OAuth 처리를 위한 함수
export const handleOAuth = async () => {
  const history = createBrowserHistory();
  const code = new URL(window.location.href).searchParams.get("code");
  
  if (code) {
    try {
      const result = await axios.get(`https://saengchaein.r-e.kr/account/kakao/callback/?code=${code}`);

      localStorage.setItem("access", result.data.access_token); // 받아온 액세스 토큰을 로컬스토리지에 저장하여 관리
      localStorage.setItem("refresh", result.data.refresh_token); // 받아온 리프레시 토큰을 로컬스토리지에 저장하여 관리
      localStorage.setItem("nickname", result.data.user.nickname); 
      localStorage.setItem("email", result.data.user.email); 
      localStorage.setItem("profile", result.data.user.profile);
      
      window.location.href = "/";
      
    } catch (error) {
      console.error("Error fetching OAuth data", error); // 에러 메세지 확인용
    }
  }
};

// OAuth 처리를 위해 페이지 로드 시 handleOAuth 호출
document.addEventListener("DOMContentLoaded", () => {
  handleOAuth();
});