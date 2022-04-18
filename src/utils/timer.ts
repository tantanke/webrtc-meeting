export const meetingTimer = (value: number): string => {
  let second = value;
  let minute = 0;
  let hour = 0;
  if (second > 60) {
    minute = Math.ceil(second / 60);
    second = Math.ceil(second % 60);
    if (minute > 60) {
      hour = Math.ceil(minute / 60);
      minute = Math.ceil(minute % 60);
    }
  }

  let result = `00: 00: ${second < 10 ? '0' + second : second}`;
  if (minute > 0) {
    result = `00: ${minute < 10 ? '0' + minute : minute}: ${
      second < 10 ? '0' + second : second
    }`;
  }
  if (hour > 0) {
    result = `${hour < 10 ? '0' + hour : hour}: ${
      minute < 10 ? '0' + minute : minute
    }: ${second < 10 ? '0' + second : second}`;
  }
  return result;
};
