import React, { useState } from 'react';
import './index.less';
import { Menu } from '@arco-design/web-react';
import { IconApps, IconBug, IconBulb } from '@arco-design/web-react/icon';
interface IProps {}
import { history } from 'umi';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const ManagePage: React.FC<IProps> = (props) => {
  const key = history.location.pathname.substring(
    history.location.pathname.length - 4,
  );
  return (
    <div
      className="menu-demo"
      style={{
        height: 780,
      }}
    >
      <div className="left"></div>
      <Menu
        style={{ width: 200, height: '100%' }}
        hasCollapseButton
        defaultOpenKeys={[key]}
        autoOpen
        defaultSelectedKeys={[key]}
        onClickMenuItem={(key) => {
          history.push('/manage/' + key);
        }}
      >
        <SubMenu
          key="user"
          title={
            <>
              <IconApps /> 人员管理
            </>
          }
        >
          <MenuItem key="info">我的信息</MenuItem>
        </SubMenu>
        <SubMenu
          key="meeting"
          title={
            <>
              <IconBug /> 会议管理
            </>
          }
        >
          <MenuItem key="make">会议预约</MenuItem>
          <MenuItem key="list">会议记录</MenuItem>
          <MenuItem key="date">会议日程</MenuItem>
        </SubMenu>
      </Menu>
      <div className="right">{props.children}</div>
    </div>
  );
};
export default ManagePage;
