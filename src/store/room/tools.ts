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
  default: false,
});
export const showMeVideo = atom<boolean>({
  key: 'showMeVideo',
  default: false,
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
export const beginShare = atom<boolean>({
  key: 'beginShare',
  default: false,
});
// 记录数据
// 会议室聊天记录
export const messageList = atom<
  Array<{
    name: string;

    message: string;
  }>
>({
  key: 'messageList',
  default: [],
});
// 单聊记录
export const oneToOneMessageList = atom<
  { name: string; value: string; color: string }[]
>({
  key: 'oneToOneMessageList',
  default: [],
});
export const hasOneToOne = atom<boolean>({
  key: 'hasOneToOne',
  default: false,
});
// 视频记录
export const videoAndMicroList = atom<
  {
    name: string;
    color: string;
    isOwner: boolean;
    micro: boolean;
    video: boolean;
  }[]
>({
  key: 'videoAndMicroList',
  default: [],
});
// 记录会议的基本信息
export const meetingInfo = atom({
  key: 'meetingInfo',
  default: {},
});
