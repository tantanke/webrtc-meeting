import React, { useState } from 'react';
import './index.less';
import LoginButtons from '../pages/home/components/loginAndRes';
import '@arco-design/web-react/dist/css/arco.css';
import { history } from 'umi';
import { RecoilRoot } from 'recoil';
interface IProps {}
const LayoutPage: React.FC<IProps> = (props) => {
  return (
    <RecoilRoot>
      <div className="main-container">
        <div className="home-topbar">
          <div className="home-topbar-left">
            <img
              style={{
                width: 60,
                height: 60,
                cursor: 'pointer',
              }}
              onClick={() => {
                history.push('/home');
              }}
              src="https://s1.ax1x.com/2022/04/15/L3WBlT.png"
              alt=""
            />
            <span className="icon-title">基于WebRTC的在线视频会议系统</span>
          </div>
          <div className="home-topbar-right">
            <LoginButtons></LoginButtons>
          </div>
        </div>
        {props.children}
        <div className="home-footer">
          <div>CopyRight@西南石油大学-谭达科</div>
          <div
            style={{
              marginTop: 6,
            }}
          >
            特别鸣谢@西南石油大学-肖斌
          </div>
        </div>
      </div>
    </RecoilRoot>
  );
};
export default LayoutPage;
