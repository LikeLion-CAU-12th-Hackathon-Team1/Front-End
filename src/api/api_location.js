import axios from "axios";

const baseURL = `https://saengchaein.r-e.kr`;

export const handleWork = async(WorkCategory, sigg_id)=>{
    const response= await axios.get(`${baseURL}/places/work/${sigg_id}/?category=${WorkCategory}`);
    return response.data;
}

export const handleRest = async(RestCategory, sigg_id)=>{
    const response= await axios.get(`${baseURL}/places/rest/${sigg_id}/?category=${RestCategory}`);
    return response.data;
}