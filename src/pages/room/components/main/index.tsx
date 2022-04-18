import React, { useState } from 'react';
import './index.less';
import PersonList from '../person-list'
import MeetingChat from '../chat'
import MeetingTools from '../tools'
interface IProps {}
const MeetingMain: React.FC<IProps> = (props) => { 
  return (
    <>
      <div className="meeting-main">
        <div className="meeting-main-left"></div>
        <div className="meeting-main-right">
        <PersonList></PersonList>
        </div>
      </div>
      <MeetingChat></MeetingChat>
      <MeetingTools></MeetingTools>
    </>
  );
};
export default MeetingMain;
