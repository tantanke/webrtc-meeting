import React, { useState } from 'react';
import './index.less';
import MeetingTimer from './components/timer';
import { IconDown } from '@arco-design/web-react/icon';
import MeetingMain from './components/main'
import {
    RecoilRoot,
  } from 'recoil';
import {
  Tooltip,
  Tag,
  Typography,
  Dropdown,
  Menu,
  Button,
  Space,
} from '@arco-design/web-react';
import Item from '@arco-design/web-react/es/Breadcrumb/item';
const { Text } = Typography;
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
  return (
    <RecoilRoot>
    <div id="meeting-inner">
      <div className="room-page-content">
        <div className="room-wrapper">
          <div style={{
              width:'100%',
          }}>
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
