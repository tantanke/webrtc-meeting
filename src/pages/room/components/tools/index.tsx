import React, { useState } from 'react';
import './index.less';
import { ReactComponent as MicroIcon } from '@/images/micro.svg';
import { ReactComponent as NoMicroIcon } from '@/images/no-micro.svg';
import { ReactComponent as VideoIcon } from '@/images/video.svg';
import { ReactComponent as PersonIcon } from '@/images/person.svg';
import { ReactComponent as DeskIcon } from '@/images/desk.svg';
import EndModal from './components/endModal';
interface IProps {}
const MeetingTools: React.FC<IProps> = (props) => {
  return (
    <div className="meeting-tools">
      <div className="icon-item">
        <MicroIcon></MicroIcon>
      </div>
      <div className="icon-item">
        {' '}
        <VideoIcon></VideoIcon>
      </div>
      <div className="icon-item">
        <DeskIcon></DeskIcon>
      </div>
      <div className="icon-item">
        <PersonIcon></PersonIcon>
        <span className='person-count'>2</span>
      </div>
      <div className="icon-item">
      <EndModal></EndModal>
       
      </div>
     
    </div>
  );
};
export default MeetingTools;
