import axios from "axios"
import { useNavigate } from "react-router-dom";

const REST_API_KEY = "872ea408194165abb49cfa9b9fe7516a";
const REDIRECT_URI1 = "http://localhost:3000/oauth";
const kakao_login_uri = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI1}&response_type=code`

//const navigate = useNavigate();

export const loginHandler = () => {
    window.location.href = kakao_login_uri;
    //window.location.href = "http://localhost:3000/login"
  };


/* 이하는 백 연결 테스트 코드 */

// const baseURL = `https://saengchaein.r-e.kr`;
// export const testGet = async()=>{
//     const result = await axios.get(`${baseURL}/account/`)
//     return result.data
// }

// export const testKakaoLogin = async()=>{
//     const result = await axios.get(`${baseURL}/account/kakao/login/`)
//     return result.data
// }

// export const testPost = async()=>{
//     const result = await axios.post(`${baseURL}/account/`)
//     return result.data
// }