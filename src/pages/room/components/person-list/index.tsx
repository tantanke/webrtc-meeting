import React, { useState } from 'react';
import './index.less';
import { ReactComponent as MicroIcon } from '@/images/micro.svg';
import { ReactComponent as NoMicroIcon } from '@/images/no-micro.svg';
import { ReactComponent as VideoIcon } from '@/images/video.svg';
import { ReactComponent as NoVideoIcon } from '@/images/no-video.svg';
import { Tag, Space } from '@arco-design/web-react';
interface IProps {}
interface PersonInfo {
  name: string;
  color: string;
  isMe: boolean;
  isOwner: boolean;
}
const personConfig: PersonInfo[] = [
  {
    name: '谭达科',
    color: 'green',
    isMe: true,
    isOwner: true,
  },
  {
    name: '陈玥',
    color: 'gray',
    isMe: false,
    isOwner: false,
  },
];
const PersonList: React.FC<IProps> = (props) => {
  return (
    <>
      <div className="join-person-title">
        参会人
        <span
          style={{
            marginLeft: 14,
          }}
        >
          (1)
        </span>
      </div>
      <div className="person-list">
        {personConfig.map((item) => {
          return (
            <div className="person-list-item" key={item.name}>
              <div className="info">
                <div
                  className="avatar"
                  style={{
                    background: item.color,
                  }}
                >
                  {item.name.substring(item.name.length - 2)}
                </div>
                <div className="name">
                  {item.name}{item.isMe ? '（我）' : ''}
                  {item.isOwner ? (
                    <div className="isOwner">
                      <Tag checkable size='small' color="red" defaultChecked>
                        主持人
                      </Tag>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="icons"   style={{
                    margin: '0 12px',
                  }}>
                  <div className='icon-item'> <NoMicroIcon
                
                ></NoMicroIcon></div>
               <div className='icon-item'>
                <NoVideoIcon></NoVideoIcon></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default PersonList;
