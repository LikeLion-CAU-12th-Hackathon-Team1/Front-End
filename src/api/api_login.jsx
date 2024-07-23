import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const REST_API_KEY = "872ea408194165abb49cfa9b9fe7516a";
const REDIRECT_URI1 = "http://localhost:3000/oauth";
const kakao_login_uri = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI1}&response_type=code`

const baseURL = `https://saengchaein.r-e.kr`;


export const loginHandler = () => {
  window.location.href = kakao_login_uri;
};

const OAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const code = new URL(window.location.href).searchParams.get("code");
      if (code) {
        try {
          const result = await axios.post(`${baseURL}/oauth?code=${ code }`);
          console.log(result.data);
          navigate("/login");
        } catch (error) {
          console.error("Error fetching OAuth data", error);
        }
      }
    };

    fetchData();
  }, [navigate]);

  return <div>Loading...</div>;
};

export default OAuth;