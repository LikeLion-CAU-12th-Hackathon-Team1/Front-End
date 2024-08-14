//워케이션등록 페이지 답변 상태 ATOM
import { atom } from "recoil";

export const answersAtom = atom({ //map용
    key: 'answers',
    default: {
        // sigg: '', //1번질문
        // workSchedule: {start: null, end: null}, //2번 질문
        work_purpose: '', //3번 질문
        work_style:'', //4번 질문
        workation2space: [],//5번
        workation2rest : [], //6번
        // sleepTime:{wake: null, sleep:null}, //7번 질문
    }
});

//2번 문제 시작일, 마감일 관리
export const startDateAtom = atom({
    key: 'startDate',
    default: null,
});
  
export const endDateAtom = atom({
    key: 'endDate',
    default: null,
});

//7번 문제 기상 및 취침시간 관리
export const wakeTimeAtom = atom({ //기상시간 아톰
    key: 'wakeTime',
    default: '', 
  });
  
  export const sleepTimeAtom = atom({ 
    key: 'sleepTime',
    default: '', 
  });

  export const siggAtom = atom({
    key: 'sigg',
    default: null,
  });