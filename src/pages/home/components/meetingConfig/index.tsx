import React, { useState } from 'react'
import './index.less'
import Cards from '../card'
interface IProps { }
const MeetingConfigs: React.FC<IProps> = (props) => {
    return (
        <>
            <h1 className='main-title'>开箱即用的视频会议</h1>
            <div className='card-container'>
                <Cards></Cards>
            </div>
        </>
    )
}
export default MeetingConfigs