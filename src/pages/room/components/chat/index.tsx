import React, { useState } from 'react';
import './index.less';
import { Input } from '@arco-design/web-react';
const info = [
  {
    name: '谭达科',
    data: '大家好，很高兴认识大家',
  },
  {
    name: '陈玥',
    data: '你好你好',
  },
];
interface IProps {}
const MeetingChat: React.FC<IProps> = (props) => {
  return (
    <div className="meeting-chat-inner">
      <div className="meeting-chat-list">
        {info.map((item, index) => {
          return (
            <div className="info-item" key={index + item.name}>
              <span className="name">{item.name}: </span>
              <span className="info">{item.data}</span>
            </div>
          );
        })}
      </div>
      <div className="meeting-chat">
        <Input style={{ width: 220 }} allowClear placeholder="说点什么" />
      </div>
    </div>
  );
};
export default MeetingChat;
