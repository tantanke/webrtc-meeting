import React, { useState } from 'react'
import './index.less'
import { Button, Modal } from '@arco-design/web-react';
type Props = {}

export default function HomePage({ }: Props) {
  const [regisVisible, setRegisVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  return (
    <div className='home-container'>
      <div className='home-topbar'>
        <div className="home-topbar-left">logo</div>
        <div className="home-topbar-rigth">
          <Button type="primary" onClick={() => {
            setLoginVisible(true)
          }}>登录</Button>
          <Modal
            title='登录账号'
            visible={loginVisible}
            onOk={() => setLoginVisible(false)}
            onCancel={() => setLoginVisible(false)}
            autoFocus={false}
            focusLock={true}
          >
            <p>
              You can customize modal body text by the current situation. This modal will be closed
              immediately once you press the OK button.
            </p>
          </Modal>
          <Button type="primary" onClick={() => {
            setRegisVisible(true)
          }}>注册</Button>
          <Modal
            title='注册账号'
            visible={regisVisible}
            onOk={() => setRegisVisible(false)}
            onCancel={() => setRegisVisible(false)}
            autoFocus={false}
            focusLock={true}
          >
            <p>
              注册
            </p>
          </Modal>
        </div>
      </div>
      <div className='home-main'></div>
      <div className='home-footer'></div>
    </div>
  )
}