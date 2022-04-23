import React, { useState } from 'react';
import './index.less';
interface IProps {}
let peers:any = {};
let streams = [];
import Peer  from 'simple-peer';
//配置STUN服务器
const getConfiguration = () => {
  return {
    iceServers: [
      {
        urls: 'stun:stun1.l.google.com:19302',
      },
    ],
  };
};
//准备webRTC连接

const MeetingRTCConfig: React.FC<IProps> = (props) => {
  return <></>;
};
export default MeetingRTCConfig;
