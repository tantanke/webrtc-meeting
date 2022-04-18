import React, { useState } from 'react';
import './index.less';
interface IProps {}
const MeetingMain: React.FC<IProps> = (props) => {
  return (
    <>
    <div className="meeting-main">
      <div className="meeting-main-left"></div>
      <div className="meeting-main-right"></div>
    </div>
    <div className='meeting-tools'></div>
    <div className='meeting-chat'></div>
    </>
  );
};
export default MeetingMain;
