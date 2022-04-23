import React, { useState, useEffect } from 'react';
import './index.less';
import MeetingTimer from './components/timer';
import { IconDown } from '@arco-design/web-react/icon';
import MeetingMain from './components/main';
import { RecoilRoot } from 'recoil';
import { history } from 'umi';
import {
  Tooltip,
  Tag,
  Typography,
  Dropdown,
  Menu,
  Button,
  Space,
} from '@arco-design/web-react';
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
  const querys: any = history.location.query;
  const dropList = (
    <Menu
      style={{
        pointerEvents: 'none',
      }}
    >
      <Menu.Item key="name">
        <span className="item-title">会议主题： </span>
        <span className="item-info">{querys.topic}</span>
      </Menu.Item>
      <Menu.Item key="id">
        <span className="item-title">会议ID： </span>
        <span className="item-info">{querys.id}</span>
      </Menu.Item>
    </Menu>
  );
  useEffect(() => {
    let meetings: any = JSON.parse(localStorage.getItem('meetingInfo') || '{}');
    let meetingFlag = JSON.parse(localStorage.getItem('meetingFlag') || '{}');
    if (querys?.host === 'true') {
      !meetingFlag[querys.id] && (meetingFlag[querys.id] = {});
      !meetings[querys.id] &&
        (meetings[querys.id] = {
          id: querys.id,
          name: querys.topic,
          owner: querys.name,
          personList: [
            {
              name: querys.name,
              color: querys.color,
              isOwner: true,
              video: false,
              micro: false,
            },
          ],
        });
    } else if (querys?.host === 'false') {
      !meetingFlag[querys.id] && (meetingFlag[querys.id] = {});
      !meetingFlag[querys.id][querys.name] &&
        (meetings[querys.id].personList = [
          ...meetings[querys.id].personList,
          {
            name: querys?.name,
            color: querys?.color,
            isOwner: false,
            video: false,
            micro: false,
          },
        ]);
    }
    console.log(querys.id, querys?.name);
    meetingFlag[querys.id][querys?.name] = true;
    localStorage.setItem('meetingFlag', JSON.stringify(meetingFlag));
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
                    <span className="meeting-id-inner">
                      ID：
                      <Typography.Paragraph copyable className="meeting-id">
                        <span>{querys.id}</span>
                      </Typography.Paragraph>
                    </span>
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
                    <div className="room-page-inner-name">{querys.topic}</div>
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
