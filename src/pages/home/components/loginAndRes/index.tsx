import React, { useState, useRef, useEffect } from 'react';
import './index.less';
import { Vertify } from '@alex_xu/react-slider-vertify';
import {
  Form,
  Input,
  Message,
  Button,
  Modal,
} from '@arco-design/web-react';
import { useMemoizedFn } from 'ahooks';
import { useSetRecoilState } from 'recoil';
import { userLoginName } from '@/store/index';
import UserSeting from '../userSeting';
const FormItem = Form.Item;
interface IProps {}
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
  const setUserName = useSetRecoilState(userLoginName);
  const [isLoginCheckRight, setIsLoginCheckRight] = useState(false);
  const [formData, setFormData] = useState<null | any>(null);
  const formRef = useRef<null | any>(null);
  const loginFormRef = useRef<null | any>(null);
  const [loginFormData, setLoginFormData] = useState<null | any>(null);
  const [isLoginRight, setIsLoginRight] = useState(true);
  const loginOut = () =>{
    setIsLoginRight(false)
  }
  const onValuesChange = (changeValue: unknown, values: unknown) => {
    setFormData(values);
  };
  const onLoginValuesChange = (changeValue: unknown, values: unknown) => {
    setLoginFormData(values);
  };
  const onLogin = useMemoizedFn(() => {
    const userInfos = JSON.parse(localStorage.getItem('userInfos') || '{}');
    if (!isLoginCheckRight) {
      Message.error('请滑动滑块完成验证！');
    } else if (
      (userInfos[loginFormData.id] &&
        userInfos[loginFormData.id]?.password !== loginFormData?.password) ||
      !userInfos[loginFormData.id]
    ) {
      Message.error('密码不正确，请重新输入！');
    } else if (
      userInfos[loginFormData.id] &&
      userInfos[loginFormData.id]?.password === loginFormData?.password
    ) {
      setUserName(userInfos[loginFormData.id].name);
      setLoginFormData(null);
      setIsLoginRight(true);
      setLoginVisible(false);
      Message.success('登录成功！');
    }
  });
  const onRegister = useMemoizedFn(() => {
    if (
      formData?.password &&
      formData?.password !== formData?.confirmPassword
    ) {
      Message.error('请保证两次密码输入一致！');
    } else if (!isRight) {
      Message.error('请滑动滑块完成验证！');
    } else {
      const userInfos = JSON.parse(localStorage.getItem('userInfos') || '{}');
      userInfos[formData.id] = formData;
      localStorage.setItem('userInfos', JSON.stringify(userInfos));
      setRegisVisible(false);
      setFormData(null);
      Message.success('注册成功！');
    }
  });
  useEffect(() => {}, []);
  return (
    <div className="login-container">
      {!isLoginRight ? (
        <>
          <Button
            type="text"
            onClick={() => {
              setLoginVisible(true);
            }}
          >
            登录
          </Button>
          <Modal
            title="登录账号"
            visible={loginVisible}
            onOk={onLogin}
            onCancel={() => setLoginVisible(false)}
            autoFocus={false}
            focusLock={true}
          >
            <Form
              ref={loginFormRef}
              {...formItemLayout}
              size="default"
              onValuesChange={onLoginValuesChange}
              scrollToFirstError
            >
              <FormItem
                label="账号名称:"
                field="id"
                rules={[{ required: true, message: '请输入用户名' }]}
              >
                <Input placeholder="..." />
              </FormItem>
              <FormItem
                label="密码:"
                field="password"
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input.Password placeholder="..." />
              </FormItem>
              <FormItem label="验证码:">
                <Vertify
                  width={340}
                  height={160}
                  visible={true}
                  onSuccess={() => setIsLoginCheckRight(true)}
                  onFail={() => setIsLoginCheckRight(false)}
                  onRefresh={() => setIsLoginCheckRight(false)}
                />
              </FormItem>
            </Form>
          </Modal>
          <Button
            type="primary"
            onClick={() => {
              setRegisVisible(true);
            }}
          >
            注册
          </Button>
          <Modal
            title="注册账号"
            visible={regisVisible}
            onOk={onRegister}
            onCancel={() => setRegisVisible(false)}
            autoFocus={false}
            focusLock={true}
          >
            <Form
              ref={formRef}
              {...formItemLayout}
              size="default"
              onValuesChange={onValuesChange}
              scrollToFirstError
            >
              <FormItem
                label="昵称:"
                field="name"
                rules={[{ required: true, message: '请输入用户名' }]}
              >
                <Input placeholder="..." />
              </FormItem>
              <FormItem
                label="账户名:"
                field="id"
                rules={[{ required: true, message: '请输入用户名' }]}
              >
                <Input placeholder="..." />
              </FormItem>
              <FormItem
                label="密码:"
                field="password"
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input.Password placeholder="..." />
              </FormItem>
              <FormItem
                label="确认密码:"
                field="confirmPassword"
                rules={[{ required: true, message: '请再次输入密码' }]}
              >
                <Input.Password placeholder="..." />
              </FormItem>
              <FormItem label="验证码:">
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
        </>
      ) : (
        <UserSeting loginOut={loginOut}></UserSeting>
      )}
    </div>
  );
};
export default LoginButtons;
