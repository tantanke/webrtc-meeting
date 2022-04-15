import React, { useState } from 'react'
import './index.less'
import LoginButtons from '../pages/home/components/loginAndRes'
import "@arco-design/web-react/dist/css/arco.css";
interface IProps { }
const LayoutPage: React.FC<IProps> = (props) => {
    return <div className='main-container'>
        <div className='home-topbar'>
            <div className="home-topbar-left">
                <img style={{
                    width: 60,
                    height: 60
                }} src="https://s1.ax1x.com/2022/04/15/L3WBlT.png" alt="" />
                <span className='icon-title'>基于WebRTC的在线视频会议系统</span>
            </div>
            <div className="home-topbar-right">
                <LoginButtons></LoginButtons>
            </div>
        </div> 
        {props.children}
    </div>
}
export default LayoutPage