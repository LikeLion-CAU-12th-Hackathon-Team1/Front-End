//워케이션등록 페이지 답변 상태 ATOM
import { atom } from "recoil";

export const answersAtom = atom({
    key: 'answers',
    default: {
        workSpace: '',
        workSchedule: {start: null, end: null},
        workStyle:'',
        workPurpose: '',
        workPlace:'',
        restMethod: [],
        sleepTime:{wake: null, sleep:null},
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