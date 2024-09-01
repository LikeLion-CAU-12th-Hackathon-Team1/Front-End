import axios from "axios";

const baseURL = `https://saengchaein.r-e.kr`;
const token = localStorage.getItem('access');

export const fetchClosestWorkation = async () => {
      try {
        const response = await axios.get(`${baseURL}/workation/closest/`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return response
      } catch (error) {
      }
    };

export const fetchAllWorkation = async () => {
      try {
          const response = await axios.get(`${baseURL}/workation/`, {
              headers: {
                  'Authorization': `Bearer ${token}`
              }
          });
          return response;
      } catch (error) {
      }
    };