import { atom } from 'recoil';

export const showExitModal = atom<boolean>({
  key: 'showExitModal',
  default: false,
});
