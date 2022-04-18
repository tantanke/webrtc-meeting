import React, { useState, useEffect } from 'react';
import './index.less';
import { meetingTimer } from '@/utils/timer';
import { useInterval } from 'ahooks';
interface IProps {}
const MeetingTimer: React.FC<IProps> = (props) => {
  const [time, setTime] = useState<number>(0);
  const [disTime, setDisTime] = useState<string>('');
  useInterval(() => {
    setTime(time + 1);
  }, 1000);
  useEffect(() => {
      setDisTime(meetingTimer(time))
  }, [time]);
  return <div className='meeting-timer'>{disTime}</div>;
};
export default MeetingTimer;
