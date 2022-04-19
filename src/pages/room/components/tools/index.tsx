import React, { useState } from 'react';
import './index.less';
import { showMeMicro, showMeVideo, MeetingName } from '@/store/index';
import { ReactComponent as MicroIcon } from '@/images/micro.svg';
import { ReactComponent as NoMicroIcon } from '@/images/no-micro.svg';
import { ReactComponent as VideoIcon } from '@/images/video.svg';
import { ReactComponent as NoVideoIcon } from '@/images/no-video.svg';
import { ReactComponent as PersonIcon } from '@/images/person.svg';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import ScreeShare from './components/screen-share'
import EndModal from './components/endModal';
interface IProps {
  setVideo: any;
}
const MeetingTools: React.FC<IProps> = (props) => {
  const showMeMicroValue = useRecoilValue<boolean>(showMeMicro);
  const showMeVideoValue = useRecoilValue<boolean>(showMeVideo);
  const setShowMeVideoValue = useSetRecoilState<boolean>(showMeVideo);
  const setShowMeMicroValue = useSetRecoilState<boolean>(showMeMicro);
  return (
    <div className="meeting-tools">
      <div
        className="icon-item"
        onClick={() => {
          setShowMeMicroValue(!showMeMicroValue);
        }}
      >
        {!showMeMicroValue ? (
          <NoMicroIcon
            style={{
              fill: '#f54a45',
            }}
          />
        ) : (
          <MicroIcon />
        )}
      </div>
      <div
        className="icon-item"
        onClick={() => {
          if (showMeVideoValue) {
            props.setVideo(false);
          } else {
            props.setVideo(true);
          }
          setShowMeVideoValue(!showMeVideoValue);
        }}
      >
        {!showMeVideoValue ? (
          <NoVideoIcon
            style={{
              fill: '#f54a45',
            }}
          />
        ) : (
          <VideoIcon />
        )}
      </div>
     
      <ScreeShare></ScreeShare>
      <div className="icon-item">
        <PersonIcon></PersonIcon>
        <span className="person-count">2</span>
      </div>
      <div className="icon-item">
        <EndModal></EndModal>
      </div>
    </div>
  );
};
export default MeetingTools;
