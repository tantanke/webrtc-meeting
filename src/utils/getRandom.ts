export const getRandom = () => {
  let res = '';
  for (let i = 0; i < 9; i++) {
    res += Math.ceil(Math.random() * 9);
  }
  return res;
};
