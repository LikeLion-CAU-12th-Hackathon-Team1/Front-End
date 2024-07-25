import { atom } from "recoil";

export const isLoginAtom = atom({
    key: 'isLogin',
    default: false,
});

export const isMyPageModalAtom = atom({
    key: 'isMyPageModal',
    default: false,
});

export const isLoginModalAtom = atom({
    key: 'isLoginModal',
    default: false,
});