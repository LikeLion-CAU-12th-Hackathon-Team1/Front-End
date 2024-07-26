import { atom } from "recoil";

// 로그인 상태 전역 아톰
export const isLoginAtom = atom({
    key: 'isLogin',
    default: false,
});

// 마이페이지 모달 오픈 여부 전역 아톰
export const isMyPageModalAtom = atom({
    key: 'isMyPageModal',
    default: false,
});

// 로그인 모달 오픈 여부 전역 아톰
export const isLoginModalAtom = atom({
    key: 'isLoginModal',
    default: false,
});