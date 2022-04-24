import React, { useState } from 'react';
import './index.less';
import {
  IconBook,
  IconToLeft,
  IconSend,
  IconEar,
} from '@arco-design/web-react/icon';
import { Menu, Space, Dropdown } from '@arco-design/web-react';
interface IProps {
  loginOut: () => void;
}
const UserSeting: React.FC<IProps> = (props) => {
  const dropList = (
    <Menu>
      <Menu.Item key="date">
        <IconBook style={{ marginRight: 16 }} />
        会议日程
      </Menu.Item>
      <Menu.Item key="date">
        <IconSend style={{ marginRight: 16 }} />
        预约会议
      </Menu.Item>
      <Menu.Item key="date">
        <IconEar style={{ marginRight: 16 }} />
        加入日程
      </Menu.Item>
      <Menu.Item onClick={() => props.loginOut()} key="exit">
        <IconToLeft style={{ marginRight: 16 }} />
        退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <Space>
      <Dropdown droplist={dropList} position="bottom">
        <div className="login-icon">达科</div>
      </Dropdown>
    </Space>
  );
};
export default UserSeting;
