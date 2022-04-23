import React, { useState, useRef } from 'react';
import './index.less';
import { Input } from '@arco-design/web-react';
import { useLocalStorageState } from 'ahooks';
import { history } from 'umi';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { messageList } from '@/store/index';
interface IProps {}
const MeetingChat: React.FC<IProps> = (props) => {
  const query = history.location.query!;
  const setMessageListValue = useRecoilValue(messageList);
  const [inputValue, setInputValue] = useState<string>('');
  const InputRef = useRef<any | null>(null);
  return (
    <div className="meeting-chat-inner">
      <div className="meeting-chat-list">
        {setMessageListValue.map((item, index) => {
          return (
            <div className="info-item" key={index + item.name}>
              <span className="name">{item.name}: </span>
              <span className="info">{item.message}</span>
            </div>
          );
        })}
      </div>
      <div className="meeting-chat">
        <Input
          ref={InputRef}
          onChange={(v) => {
            setInputValue(v);
          }}
          value={inputValue}
          onPressEnter={() => {
            if (inputValue) {
              const data = JSON.parse(
                localStorage.getItem('messageList') || '[]',
              );
              localStorage.setItem(
                'messageList',
                JSON.stringify([
                  ...data,
                  {
                    name: query.name,
                    message: inputValue,
                  },
                ]),
              );
              setInputValue('');
            }
          }}
          style={{ width: 220 }}
          allowClear
          placeholder="说点什么"
        />
      </div>
    </div>
  );
};
export default MeetingChat;
