import axios from "axios"

const baseURL = `https://saengchaein.r-e.kr`;

export const testGet = async()=>{
    const result = await axios.get(`${baseURL}/account/`)
    return result.data
}

export const testKakaoLogin = async()=>{
    const result = await axios.get(`${baseURL}/account/kakao/login/`)
    return result.data
}

export const testPost = async()=>{
    const result = await axios.post(`${baseURL}/account/`)
    return result.data
}