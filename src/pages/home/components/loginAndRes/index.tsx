import React, { useState } from 'react'
import './index.less'
import { Button, Modal } from '@arco-design/web-react';
interface IProps { }
const LoginButtons: React.FC<IProps> = (props) => {
    const [regisVisible, setRegisVisible] = useState(false);
    const [loginVisible, setLoginVisible] = useState(false);
    return (
        <> <Button type='text' onClick={() => {
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
            </Modal></>
    )
}
export default LoginButtons