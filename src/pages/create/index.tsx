import React, { useEffect, useState } from 'react';
import './index.less';
import { useMemoizedFn } from 'ahooks';
import { Input } from '@arco-design/web-react';
import { UserColors } from '@/const';
import { ReactComponent as MicroIcon } from '@/images/micro.svg';
import { ReactComponent as NoMicroIcon } from '@/images/no-micro.svg';
import { ReactComponent as VideoIcon } from '@/images/video.svg';
import { ReactComponent as NoVideoIcon } from '@/images/no-video.svg';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { showMeMicro, showMeVideo, MeetingName } from '@/store/index';
import { history } from 'umi';
import { Button } from '@arco-design/web-react';
import { getRandom } from '@/utils/getRandom';
const defaultConstraints: any = {
  audio: true,
  video: { width: '576', height: '324' },
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
const color = UserColors[Math.ceil(Math.random() * 10)];
export const showLocalVideoPreview = (stream: MediaStream) => {
  const videosContainer = document.getElementById('videos_portal')!;
  videosContainer.classList.add('videos_portal_styles');
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
interface IProps {}

const JoinPage: React.FC<IProps> = (props) => {
  const showMeMicroValue = useRecoilValue<boolean>(showMeMicro);
  const showMeVideoValue = useRecoilValue<boolean>(showMeVideo);
  const setShowMeVideoValue = useSetRecoilState<boolean>(showMeVideo);
  const setShowMeMicroValue = useSetRecoilState<boolean>(showMeMicro);
  const meetingNameValue = useRecoilValue<string>(MeetingName);
  const setMeetingNameValue = useSetRecoilState<string>(MeetingName);
  const [userName, setUserName] = useState('');
  useEffect(() => {
    getLocalPreviewAndInitRoomConnection();
    return () => {
      const videosContainer = document.getElementById('videos_portal');
      videosContainer ? videosContainer.remove() : '';
    };
  }, []);
  const onCreateMeeting = useMemoizedFn(() => {
    history.push(
      `/room?name=${userName}&host=${true}&topic=${meetingNameValue}&order=1&color=${color}&id=${getRandom()}`,
    );
  });
  return (
    <div className="join-container">
      <h1 className="join-title">创建会议</h1>
      <div className="join-info">
        <div className="join-info-item">
          <Input
            onChange={(v) => {
              setMeetingNameValue(v);
            }}
            style={{ width: 580 }}
            allowClear
            placeholder="会议主题"
          />
        </div>
        <div className="join-info-item">
          {' '}
          <Input
            style={{ width: 580 }}
            allowClear
            onChange={(v) => {
              setUserName(v);
            }}
            placeholder="昵称(默认为用户名)"
          />
        </div>
      </div>
      <div id="videos_portal"></div>
      <div className="video-icons">
        <div
          className="icon-item"
          onClick={() => {
            setShowMeMicroValue(!showMeMicroValue);
          }}
        >
          {!showMeMicroValue ? (
            <NoMicroIcon
              style={{
                color: '#f54a45',
              }}
            />
          ) : (
            <MicroIcon />
          )}
        </div>
        <div
          className="icon-item"
          onClick={() => {
            if (showMeVideoValue && localStream) {
              localStream.getVideoTracks()[0].enabled = false;
            } else if (!showMeVideoValue && localStream) {
              localStream.getVideoTracks()[0].enabled = true;
            }
            setShowMeVideoValue(!showMeVideoValue);
          }}
        >
          {!showMeVideoValue ? (
            <NoVideoIcon
              style={{
                color: '#f54a45',
              }}
            />
          ) : (
            <VideoIcon />
          )}
        </div>
        <Button
          type="outline"
          disabled={meetingNameValue.length < 1 ? true : false}
          onClick={onCreateMeeting}
        >
          立刻创建
        </Button>
      </div>
    </div>
  );
};
export default JoinPage;
