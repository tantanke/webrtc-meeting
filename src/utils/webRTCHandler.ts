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
    onlyAudio:Boolean = false
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