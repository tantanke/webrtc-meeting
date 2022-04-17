import React, { useState } from 'react'
import './index.less'
import { history } from 'umi';
import { useMemoizedFn } from 'ahooks';
import { ReactComponent as StartIcon } from '@/images/start.svg'
import { ReactComponent as JoinIcon } from '@/images/join.svg'
interface CardItem {
    name: string;
    desc: string;
    icon: React.ReactElement
}
const config: Array<CardItem> = [{
    icon: <StartIcon />,
    name: '创建新的会议',
    desc: '选择符合需求的会议形式'
}, {
    icon: <JoinIcon />,
    name: '加入已有的会议',
    desc: '输入会议号，一键入会'
}]
interface IProps { }
const ConfigCard: React.FC<IProps> = (props) => {
    const initMeeting = useMemoizedFn(() => {
        history.push('/create');
    })
    const joinMeeting = useMemoizedFn(() => {
        history.push('/join');
    })
    return <> <div className='card-item'>
        <div className="card" onClick={initMeeting}>
            <div className='icon'><StartIcon /></div>
            <div className='line'></div>
            <div className="content">
                <div className="content-inner">
                    <div className="title">创建新的会议</div>
                    <div className='text'>选择符合需求的会议形式</div>
                </div>
            </div>
        </div>
    </div>
        <div className='card-item'>
            <div className="card" onClick={joinMeeting}>
                <div className='icon'><JoinIcon /></div>
                <div className='line'></div>
                <div className="content">
                    <div className="content-inner">
                        <div className="title">加入已有的会议</div>
                        <div className='text'>输入会议号，一键入会</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default ConfigCard