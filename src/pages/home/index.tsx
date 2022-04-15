import React, { useState } from 'react'
import './index.less'

import MeetingConfig from './components/MeetingConfig'
type Props = {}

export default function HomePage({ }: Props) {
  return (
    <div className='home-container'>
      <div className='home-main'>
        <MeetingConfig></MeetingConfig>
      </div>
      <div className='home-footer'>
        <div>CopyRight@西南石油大学-谭达科</div>
        <div style={{
          marginTop: 6
        }}>特别鸣谢@西南石油大学-肖斌</div>
      </div>
    </div>
  )
}