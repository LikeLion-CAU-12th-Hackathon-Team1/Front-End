import axios from "axios";

const baseURL = "https://saengchaein.r-e.kr";

export const makeWorkation = async(dataTosend)=>{
    const token =localStorage.getItem('access');
    try{
        const response = await axios.post(`${baseURL}/workation/`, dataTosend,{
            headers: {
            Authorization: `Bearer ${token}`
            }
        });
    } catch(error){
      throw error;
    }
}