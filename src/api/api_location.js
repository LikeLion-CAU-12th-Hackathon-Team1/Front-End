import axios from "axios";
import { useState } from "react";

const baseURL = `https://saengchaein.r-e.kr`;

//데일리시간표 로드 시 get으로 받아온 sigg_id를 여기서 저장하고 사용하기



export const handleWork = async(WorkCategory, sigg_id)=>{
    const response= await axios.get(`${baseURL}/places/work/${sigg_id}/?category=${WorkCategory}`);
    return response.data;
}

export const handleRest = async(RestCategory, sigg_id)=>{
    const response= await axios.get(`${baseURL}/places/rest/${sigg_id}/?category=${RestCategory}`);
    return response.data;
}