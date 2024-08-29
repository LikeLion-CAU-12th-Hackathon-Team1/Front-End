// 일일일정 가장 최근 것 불러오는 api

import axios from "axios";

const baseURL = `https://saengchaein.r-e.kr`;


export const getThisAll = async (workation_id) => {

    const token = localStorage.getItem('access');

    try {
      const response = await axios.get(`${baseURL}/workation/${workation_id}/`, {
        headers: {Authorization: `Bearer ${token}`
    }
      });
      return response.data;
    } catch (error) {
    }
  };

  export const getThisAllReal = async () => {

    const token = localStorage.getItem('access');

    try {
      const response = await axios.get(`${baseURL}/workation/closest/`, {
        headers: {Authorization: `Bearer ${token}`
    }
      });
      return response.data;
    } catch (error) {
    }
  };