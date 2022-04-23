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
const query: any = history.location.query;
const dropList = (
  <Menu>
    <Menu.Item key="name">
      <span className="item-title">会议主题： </span>
      <span className="item-info">{query.topic}</span>
    </Menu.Item>
    <Menu.Item key="id">
      <span className="item-title">会议ID： </span>
      <span className="item-info">{query.id}</span>
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
  useEffect(() => {
    let meetings: any = JSON.parse(localStorage.getItem('meetingInfo') || '{}');
    const meetingFlag = JSON.parse(localStorage.getItem('meetingFlag') || '{}');
    if (query?.host === 'true') {
      !meetingFlag[query.id] && (meetingFlag[query.id] = {});
      !meetings[query.id] &&
        (
          meetings[query.id] = {
          id: query.id,
          name: query.topic,
          owner: query.name,
          personList: [
            {
              name: query.name,
              color: query.color,
              isOwner: true,
              video: false,
              micro: false,
            },
          ],
        });
    } else if (query?.host === 'false') {
      console.log(99090);
      !meetingFlag[query.id] && (meetingFlag[query.id] = {});
      !meetingFlag[query.id][query.name] &&
        (meetings[query.id].personList = [
          ...meetings[query.id].personList,
          {
            name: query?.name,
            color: query?.color,
            isOwner: false,
            video: false,
            micro: false,
          },
        ]);
      console.log(meetings[query.id].personList, query?.name);
    }

    meetingFlag[query.id][query?.name] = true;
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
                    <Tooltip mini content="复制入会信息">
                      <span className="meeting-id">ID: {query.id.replace(/(.{3})/g,'$1 ')}</span>
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
                    <div className="room-page-inner-name">{query.topic}</div>
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
