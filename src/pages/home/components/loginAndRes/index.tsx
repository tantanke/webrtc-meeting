import React, { useState, useRef, useEffect } from 'react'
import './index.less'
import { Vertify } from '@alex_xu/react-slider-vertify';
import {
    Form,
    AutoComplete,
    Input,
    Select,
    TreeSelect,
    Checkbox,
    Switch,
    Radio,
    Cascader,
    Message,
    InputNumber,
    Rate,
    Slider,
    Upload,
    DatePicker
} from '@arco-design/web-react';
import { Button, Modal } from '@arco-design/web-react';
const FormItem = Form.Item;
interface IProps {

}
const formItemLayout = {
    labelCol: {
        span: 7,
    },
    wrapperCol: {
        span: 17,
    },
};
const noLabelLayout = {
    wrapperCol: {
        span: 17,
        offset: 7,
    },
};
const LoginButtons: React.FC<IProps> = (props) => {
    const [regisVisible, setRegisVisible] = useState(false);
    const [loginVisible, setLoginVisible] = useState(false);
    const [isRight, setIsRight] = useState(false);
    const [formData, setFormData] = useState<null | any>(null);
    const formRef = useRef<null | any>(null);
    const loginFormRef = useRef<null | any>(null);
    const [loginFormData, setLoginFormData] = useState<null | any>(null);
    const [isLoginRight, setIsLoginRight] = useState(false);
    const onValuesChange = (changeValue: unknown, values: unknown) => {
        setFormData(values);
    }
    const onLoginValuesChange = (changeValue: unknown, values: unknown) => {
        setFormData(values);
    }
    useEffect(() => {

    }, [])
    return (
        <> <Button type='text' onClick={() => {
            setLoginVisible(true)
        }}>登录</Button>
            <Modal
                title='登录账号'
                visible={loginVisible}
                onOk={() => {
                    setLoginVisible(false)
                }}
                onCancel={() => setLoginVisible(false)}
                autoFocus={false}
                focusLock={true}
            >
                <Form
                    ref={loginFormRef}
                    {...formItemLayout}
                    size='default'
                    onValuesChange={onLoginValuesChange}
                    scrollToFirstError
                >
                    <FormItem
                        label='账号名称:'
                        field='id'
                        rules={[{ required: true, message: '请输入用户名' }]}
                    >
                        <Input placeholder='...' />
                    </FormItem>
                    <FormItem
                        label='密码:'
                        field='password'
                        rules={[{ required: true, message: '请输入密码' }]}
                    >
                        <Input.Password placeholder='...' />
                    </FormItem>
                    <FormItem
                        label='验证码:'
                    >

                        <Vertify
                            width={340}
                            height={160}
                            visible={true}
                            onSuccess={() => setIsRight(true)}
                            onFail={() => setIsRight(false)}
                            onRefresh={() => setIsRight(false)}
                        />
                    </FormItem>
                </Form>
            </Modal>
            <Button type="primary" onClick={() => {
                setRegisVisible(true)
            }}>注册</Button>
            <Modal
                title='注册账号'
                visible={regisVisible}
                onOk={() => {
                    if (formData?.password && (formData?.password !== formData.confirmPassword)) {
                        Message.error("请保证两次密码输入一致！")
                    } else {
                        setRegisVisible(false)
                    }

                }}
                onCancel={() => setRegisVisible(false)}
                autoFocus={false}
                focusLock={true}
            >
                <Form
                    ref={formRef}
                    {...formItemLayout}
                    size='default'
                    onValuesChange={onValuesChange}
                    scrollToFirstError
                >
                    <FormItem
                        label='昵称:'
                        field='name'
                        rules={[{ required: true, message: '请输入用户名' }]}
                    >
                        <Input placeholder='...' />
                    </FormItem>
                    <FormItem
                        label='账户名:'
                        field='id'
                        rules={[{ required: true, message: '请输入用户名' }]}
                    >
                        <Input placeholder='...' />
                    </FormItem>
                    <FormItem
                        label='密码:'
                        field='password'
                        rules={[{ required: true, message: '请输入密码' }]}
                    >
                        <Input.Password placeholder='...' />
                    </FormItem>
                    <FormItem
                        label='确认密码:'
                        field='confirmPassword'
                        rules={[{ required: true, message: '请再次输入密码' }]}
                    >
                        <Input.Password placeholder='...' />
                    </FormItem>
                    <FormItem
                        label='验证码:'
                    >

                        <Vertify
                            width={340}
                            height={160}
                            visible={true}
                            onSuccess={() => setIsRight(true)}
                            onFail={() => setIsRight(false)}
                            onRefresh={() => setIsRight(false)}
                        />
                    </FormItem>
                </Form>
            </Modal></>
    )
}
export default LoginButtons