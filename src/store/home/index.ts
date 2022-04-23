import { atom } from 'recoil';
// 创建会议室
export const mainLoading = atom<boolean>({
  key: 'mainLoading',
  default: false,
});
export const userLoginName = atom({
  key: 'userName',
  default: '',
});