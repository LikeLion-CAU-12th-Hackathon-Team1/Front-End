import axios from "axios";

const baseURL = `https://saengchaein.r-e.kr`;


// 데일리 워케이션에 회고 작성 - component_TimeTable/RetrospectCom.jsx - save 버튼에 연결
export const patchdailyRetro = async(daily_workation_id, body)=>{

    const token =localStorage.getItem('access'); // localStorage에서 사용자 ID를 숫자로 가져오기

    const response= await axios.patch(`${baseURL}/workation/daily/${daily_workation_id}/memo/`,body,{
        headers: {Authorization: `Bearer ${token}`
    }
    });
    //console.log(response.data)
    return response.data;
}

// 데일리 워케이션에 회고 불러오기 - OneDayTimeTable.jsx - useEffect에 연결
export const getdailyRetro = async(daily_workation_id)=>{

    const token =localStorage.getItem('access'); // localStorage에서 사용자 ID를 숫자로 가져오기

    const response= await axios.get(`${baseURL}/workation/daily/${daily_workation_id}/`,{
        headers: {Authorization: `Bearer ${token}`
    }
    });
    //console.log(response.data)
    return response.data;
}

// 데일리 워케이션 시간표 불러오기 - OneTimeTable.jsx - useEffect에 연결 / 추후 시간표 추가, 삭제 버튼에도 등록해야 하나...?
export const getDailyAllTable = async(daily_workation_id)=>{

    const token =localStorage.getItem('access');

    const response= await axios.get(`${baseURL}/workation/daily/${daily_workation_id}/time/`,{
        headers: {Authorization: `Bearer ${token}`
    }
    });
    //console.log(response.data)
    return response.data;
}


// 시간표 한 블럭 추가 - TimeEditOn.jsx - savebtn에 연결
export const postOneTable = async(daily_workation_id, body)=>{

    const token =localStorage.getItem('access');

    try{
        const response= await axios.post(`${baseURL}/workation/daily/${daily_workation_id}/time/`, body,{
            headers: {Authorization: `Bearer ${token}`
        }
        });
        //console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('에러발생', error)
        alert("중복시간 입력하실 수 없습니다")
    }
    
}

// 데일리 워케이션 아이디 받아와서 오늘일정 띄워주는 것 - TimeTable.jsx 랜더링시 실행
export const getDailyTodayId = async()=>{

    const token =localStorage.getItem('access');

    const response= await axios.get(`${baseURL}/workation/today/`,{
        headers: {Authorization: `Bearer ${token}`
    }
    });
    console.log(response.data)
    return response.data;
}

// 그래프 받아오기
export const getGraph = async(daily_workation_id)=>{

    const token =localStorage.getItem('access');

    const response= await axios.get(`${baseURL}/workation/daily/${daily_workation_id}/graph/`,{
        headers: {Authorization: `Bearer ${token}`
    }
    });
    //console.log(response.data)
    return response.data;
}

// 데일리 타임 블록 삭제
export const delDailyTimeBlock = async(time_workation_id)=>{

    const token =localStorage.getItem('access');

    const response= await axios.delete(`${baseURL}/workation/daily/time/${time_workation_id}/`,{
        headers: {Authorization: `Bearer ${token}`
    }
    });
    //console.log(response.data)
    return response.data;
}

// 시간블록 todo조회
export const getTimeTodo = async(time_workation_id)=>{

    const token =localStorage.getItem('access');

    const response= await axios.delete(`${baseURL}/workation/daily/time/${time_workation_id}/todolist/`,{
        headers: {Authorization: `Bearer ${token}`
    }
    });
    //console.log(response.data)
    return response.data;
}

// 전체하루 todo조회
export const getDailyTodo = async(daily_workation_id)=>{

    const token =localStorage.getItem('access');

    const response= await axios.get(`${baseURL}/workation/daily/${daily_workation_id}/todolist/`,{
        headers: {Authorization: `Bearer ${token}`
    }
    });
    console.log(response.data)
    return response.data;
}