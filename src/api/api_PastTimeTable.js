import axios from "axios";

const baseURL = `https://saengchaein.r-e.kr`;

export const delPastWorkation = async(workation_id)=>{
    const token =localStorage.getItem('access');

    const response= await axios.delete(`${baseURL}/workation/${workation_id}/`,{
        headers: {Authorization: `Bearer ${token}`
    }
    });
    console.log(response.data)
    return response.data;
}