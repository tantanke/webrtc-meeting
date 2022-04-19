import React, { useState, useRef, useEffect } from 'react';
import './index.less';
import { ReactComponent as DeskIcon } from '@/images/desk.svg';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectVideoMode } from '@/store/index';
interface IProps {}
const defaultConstraints: any = {
  audio: true,
  video: { width: '1500', height: '1100' },
};
const HomePage: React.FC<IProps> = (props) => {
  const localPreviewRef = useRef<null | any>(null);
  const [isScreenSharingActive, setIsScreenSharingActive] = useState(false);
  const [screenSharingStream, setScreenSharingStream] = useState<any>(null);
  const selectVideoModeValue = useRecoilValue<number>(selectVideoMode);
  const setSelectVideoModeValue = useSetRecoilState<number>(selectVideoMode);
  const handleScreenShareToggle = async () => {
    if (!isScreenSharingActive) {
      let stream = null;
      try {
        stream = await navigator.mediaDevices.getDisplayMedia(
          defaultConstraints,
        );
      } catch (error) {
        console.log('获取共享屏幕的媒体流失败', error);
      }
      if (stream) {
        setScreenSharingStream(stream as any);
        setIsScreenSharingActive(true);
        stream.getVideoTracks()[0].addEventListener('ended', () => {
          setIsScreenSharingActive(false);
          setSelectVideoModeValue(0);
        });
        setSelectVideoModeValue(2);
      }
    } else {
      setIsScreenSharingActive(false);
      // 停止屏幕共享
      screenSharingStream.getTracks().forEach((track: any) => track.stop());
      setScreenSharingStream(null);
    }
  };
  useEffect(() => {
    const video = localPreviewRef.current;
    video.srcObject = screenSharingStream;
    video.onloadedmetadata = () => {
      video.play();
    };
    video.pause = () => {
      console.log(1121);
    };
  }, [screenSharingStream]);
  return (
    <div className="icon-item">
      <DeskIcon onClick={handleScreenShareToggle}></DeskIcon>
      <div
        style={{
          display: isScreenSharingActive ? 'block' : 'none',
        }}
        onClick={() => {
          if (selectVideoModeValue === 1) {
            setSelectVideoModeValue(2);
          }
          console.log(selectVideoModeValue)
        }}
        className={`${
          selectVideoModeValue === 1
            ? 'local_screen_share_preview_small'
            : 'local_screen_share_preview_big'
        }`}
      >
        <video ref={localPreviewRef} muted autoPlay></video>
      </div>
    </div>
  );
};
export default HomePage;
