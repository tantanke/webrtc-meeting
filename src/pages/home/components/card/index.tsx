import React, { useState } from 'react'
import './index.less'
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
    return <>{config.map((item: CardItem, index: number) => {
        console.log(item, index)
        return <div className='card-item' key={item.name}>
            <div className="card">
                <div className='icon'>{item.icon}</div>
                <div className='line'></div>
                <div className="content">
                    <div className="content-inner">
                        <div className="title">{
                            item.name
                        }</div>
                        <div className='text'>{
                            item.desc
                        }</div>
                    </div>
                </div>
            </div>
        </div>
    })}</>
}
export default ConfigCard