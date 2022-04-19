import { atom } from 'recoil';
// 创建会议室
export const MeetingName = atom<string>({
  key: 'MeetingName',
  default: '',
});
export const showExitModal = atom<boolean>({
  key: 'showExitModal',
  default: false,
});
export const showMeMicro = atom<boolean>({
  key: 'showMeMicro',
  default: true,
});
export const showMeVideo = atom<boolean>({
  key: 'showMeVideo',
  default: true,
});
export const showMeMicroInit = atom<boolean>({
  key: 'showMeMicroInit',
  default: true,
});
export const showMeVideoInit = atom<boolean>({
  key: 'showMeVideoInit',
  default: true,
});
export const MeetNumber = atom<string>({
  key: 'MeetNumber',
  default: '',
});
export const selectVideoMode = atom<number>({
  key: 'selectVideoMode',
  default: 0,
});
