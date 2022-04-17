import React, { useEffect, useState } from 'react'
import './index.less'
import { useMemoizedFn } from 'ahooks';
import { Input } from '@arco-design/web-react';
import { ReactComponent as MicroIcon } from '@/images/micro.svg'
import { ReactComponent as NoMicroIcon } from '@/images/no-micro.svg'
import { ReactComponent as VideoIcon } from '@/images/video.svg'
import { ReactComponent as NoVideoIcon } from '@/images/no-video.svg'
import { history } from 'umi';
import { getLocalPreviewAndInitRoomConnection } from '@/utils/webRTCHandler'
import { Button } from '@arco-design/web-react';
interface IProps { }

const JoinPage: React.FC<IProps> = (props) => {
    const [disabledMicro, setDisabledMicro] = useState<boolean>(false)
    const [disabledVideo, seisabledVideo] = useState<boolean>(false)
    const [canJoinValue, seCanJoinValue] = useState<boolean>(false)
    useEffect(() => {
        getLocalPreviewAndInitRoomConnection()
        return () => {
            const videosContainer = document.getElementById('videos_portal')
            videosContainer ? videosContainer.remove() : ''
        }
    }, [])
    const onCreateMeeting = useMemoizedFn(() => {
        history.push('/room');
    })
    return (
        <div className='join-container'>
            <h1 className='join-title'>创建会议</h1>
            <div className="join-info">
                <div className='join-info-item'><Input
                    style={{ width: 350 }}
                    allowClear
                    placeholder='会议主题'
                /></div>
                <div className='join-info-item'>  <Input
                    style={{ width: 350 }}
                    allowClear
                    placeholder='昵称(默认为用户名)'
                /></div>

            </div>
            <div id='videos_portal'></div>
            <div className="video-icons">
                <div className='icon-item'>{disabledMicro ? <NoMicroIcon style={{
                    color: '#f54a45'
                }} /> : <MicroIcon />}</div>
                <div className='icon-item'> {disabledVideo ? <NoVideoIcon style={{
                    color: '#f54a45'
                }} /> : <VideoIcon />}</div>
                <Button type='outline' onClick={onCreateMeeting} /* disabled={canJoinValue} */>立刻创建</Button>
            </div>
        </div>
    )
}
export default JoinPage