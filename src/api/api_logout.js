import axios from "axios";

const baseURL = `https://saengchaein.r-e.kr`;

export const logout = async()=> {
    const token =localStorage.getItem('access');
    try {
      const response = await axios.post(`${baseURL}/account/logout/`,null, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } catch (error) {
    }
  }