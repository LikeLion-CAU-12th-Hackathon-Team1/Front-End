import axios from "axios";
import { useState } from "react";

const baseURL = `https://saengchaein.r-e.kr`;

//데일리시간표 로드 시 get으로 받아온 sigg_id를 여기서 저장하고 사용하기

const sigg_id =1;


export const handleWork = async(WorkCategory)=>{
    const response= await axios.get(`${baseURL}/places/work/${sigg_id}/?category=${WorkCategory}`);
    return response.data;
}

export const handleRest = async(RestCategory)=>{
    const response= await axios.get(`${baseURL}/places/rest/1/?category=${RestCategory}`);
    return response.data;
}