import React, { useState } from 'react'
import './index.less'
import LoginButtons from './components/loginAndRes'
import MeetingConfig from './components/MeetingConfig'
type Props = {}

export default function HomePage({ }: Props) {
  return (
    <div className='home-container'>
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
      <div className='home-main'>
        <MeetingConfig></MeetingConfig>
      </div>
      <div className='home-footer'>
        <div>CopyRight@西南石油大学-谭达科</div>
        <div style={{
          marginTop: 6
        }}>特别鸣谢@西南石油大学-肖斌</div>
      </div>
    </div>
  )
}