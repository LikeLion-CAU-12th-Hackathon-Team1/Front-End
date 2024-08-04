import axios from "axios";

const baseURL = `https://saengchaein.r-e.kr`;

// 타이머
export const timer = async()=> {

    const token =localStorage.getItem('access');
try{
    const response= await axios.get(`${baseURL}/workation/timer/`, {
        headers: {Authorization: `Bearer ${token}`
    }
    });
    console.log(response.data)
    return response.data;
}catch(error){
    console.log(error)
}
    
}