import React, { useState, useEffect } from 'react';
import './index.less';
import PersonList from '../person-list';
import MeetingChat from '../chat';
import MeetingTools from '../tools';
import { useMemoizedFn } from 'ahooks';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { showMeVideo, selectVideoMode } from '@/store/index';
interface IProps {}
const defaultConstraints: any = {
  audio: true,
  video: { width: '1500', height: '1100' },
};
//仅开启音频链接
const onlyAudioConstraints = {
  audio: true,
  video: false,
};
let localStream: MediaStream | null = null;
export const getLocalPreviewAndInitRoomConnection = async (
  onlyAudio: Boolean = false,
) => {
  //判断是开启音频还是音视频
  const constrains = onlyAudio ? onlyAudioConstraints : defaultConstraints;
  //采集本地音视频流（获取媒体输入的访问权限）
  navigator.mediaDevices
    .getUserMedia(constrains)
    .then((stream) => {
      //   console.log('成功获取本地媒体流');
      localStream = stream;
      //预览本地视频
      showLocalVideoPreview(localStream);
    })
    .catch((error) => {
      console.log('无法获取本地媒体流！');
      console.log(error);
    });
};
export const showLocalVideoPreview = (stream: MediaStream) => {
  const videosContainer = document.getElementById('meeting-main-container')!;
  videosContainer.classList.add('videos_portal_styles_main');
  const videoInner = document.createElement('div');
  videoInner.classList.add('video_track_container');
  const videoElement = document.createElement('video');
  videoElement.classList.add('video_catcher');
  videoElement.autoplay = true;
  videoElement.muted = true;
  videoElement.srcObject = stream;
  //onloadedmetadata在指定视频/音频（audio/video）的元数据加载后触发。
  videoElement.onloadedmetadata = () => {
    videoElement.play();
  };
  videoInner.appendChild(videoElement);
  videosContainer.appendChild(videoInner);
};
const MeetingMain: React.FC<IProps> = (props) => {
  const showMeVideoValue = useRecoilValue<boolean>(showMeVideo);
  const selectVideoModeValue = useRecoilValue<number>(selectVideoMode);
  const setSelectVideoModeValue = useSetRecoilState<number>(selectVideoMode);
  useEffect(() => {
    getLocalPreviewAndInitRoomConnection();
    return () => {
      const videosContainer = document.getElementById('videos_portal');
      videosContainer ? videosContainer.remove() : '';
    };
  }, []);
  const setVideo = useMemoizedFn((value: boolean) => {
    if (localStream) {
      localStream.getVideoTracks()[0].enabled = value;
    }
  });
  return (
    <>
      <div className="meeting-main">
        <div className="meeting-main-left">
          <div
            id="meeting-main-container"
            onClick={() => {
              if (selectVideoModeValue === 2) {
                setSelectVideoModeValue(1);
              }
            }}
            className={`${
              selectVideoModeValue === 2
                ? 'video_screen_share_preview_small'
                : ''
            }`}
            style={{
              display: showMeVideoValue ? 'block' : 'none',
            }}
          ></div>
          <div
            className="no-video-logo"
            style={{
              display: !showMeVideoValue ? 'block' : 'none',
              background: 'green',
            }}
          >
            达科
          </div>
          <div className="meeting-main-talking">正在讲话：谭达科</div>
        </div>
        <div className="meeting-main-right">
          <PersonList></PersonList>
        </div>
      </div>
      <MeetingChat></MeetingChat>
      <MeetingTools setVideo={setVideo}></MeetingTools>
    </>
  );
};
export default MeetingMain;
