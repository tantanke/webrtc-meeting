import React, { useState, useEffect } from 'react';
import './index.less';
import MeetingTimer from './components/timer';
import { IconDown } from '@arco-design/web-react/icon';
import MeetingMain from './components/main';
import { RecoilRoot } from 'recoil';
import { history } from 'umi';
import { getRandom } from '@/utils/getRandom';
import {
  Tooltip,
  Tag,
  Dropdown,
  Menu,
  Button,
  Space,
} from '@arco-design/web-react';
const dropList = (
  <Menu>
    <Menu.Item key="name">
      <span className="item-title">会议主题： </span>
      <span className="item-info"> tandake会议测试</span>
    </Menu.Item>
    <Menu.Item key="id">
      <span className="item-title">会议ID： </span>
      <span className="item-info"> 130 836 034</span>
    </Menu.Item>
    <Menu.Item key="copy">
      <Button
        style={{
          width: '100%',
        }}
        size="small"
      >
        复制入会信息
      </Button>
    </Menu.Item>
  </Menu>
);
const options = [
  {
    color: 'arcoblue',
    name: '日常',
  },
  { color: 'orange', name: '总结' },
  { color: 'lime', name: '周会' },
];
interface IProps {}
const Room: React.FC<IProps> = (props) => {
  const query: any = history.location.query;
  useEffect(() => {
    let meetings;
    if (query?.host && !localStorage.getItem('meetingInfo')) {
      const id = getRandom();
      meetings = {
        id,
        name: query.topic,
        owner: query.name,
        personList: [
          {
            name: query.name,
            color: query.color,
            isOwner: true,
            video: true,
            micro: true,
          },
        ],
      };
    } else {
      meetings = JSON.parse(localStorage.getItem('meetingInfo')!);
      meetings.personList.push({
        name: query?.name,
        color: query?.color,
        isOwner: false,
        video: true,
        micro: true,
      });
    }
    localStorage.setItem('meetingInfo', JSON.stringify(meetings));
  }, []);
  return (
    <RecoilRoot>
      <div id="meeting-inner">
        <div className="room-page-content">
          <div className="room-wrapper">
            <div
              style={{
                width: '100%',
              }}
            >
              <div className="room-page-title">
                <div className="room-page-inner">
                  <div className="room-page-inner-left">
                    <Tooltip mini content="复制入会信息">
                      <span className="meeting-id">ID: 640 928 814</span>
                    </Tooltip>
                    <Dropdown
                      getPopupContainer={() => {
                        return document.getElementById('meeting-inner')!;
                      }}
                      droplist={dropList}
                      trigger="click"
                      position="br"
                    >
                      <IconDown
                        style={{
                          marginLeft: 14,
                        }}
                      />
                    </Dropdown>
                    <Space
                      size="small"
                      style={{
                        marginLeft: 14,
                      }}
                    >
                      {options.map((item) => {
                        return (
                          <Tag
                            size="small"
                            checkable
                            key={item.name}
                            color={item.color}
                            defaultChecked
                          >
                            {item.name}
                          </Tag>
                        );
                      })}
                    </Space>
                    <div className="room-page-inner-name">tandake会议测试</div>
                  </div>

                  <div className="room-page-inner-right">
                    <MeetingTimer></MeetingTimer>
                  </div>
                </div>
              </div>
              <MeetingMain></MeetingMain>
            </div>
          </div>
        </div>
      </div>
    </RecoilRoot>
  );
};
export default Room;
