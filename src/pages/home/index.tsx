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
    </div>
  )
}