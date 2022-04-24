import React, { useState } from 'react';
import { Form, Input, Message, Button, Modal } from '@arco-design/web-react';
interface IProps {}
import { Vertify } from '@alex_xu/react-slider-vertify';
const FormItem = Form.Item;
const MyInfo: React.FC<IProps> = (props) => {
  const [loginVisible, setLoginVisible] = useState(false);
  const [isRight, setIsRight] = useState(true);
  return (
    <>
      <div className="right-title">我的信息</div>
      <Button
        onClick={() => {
          setLoginVisible(true);
        }}
        type="primary"
      >
        修改密码
      </Button>
      <Modal
        title="登录账号"
        visible={loginVisible}
        onOk={() => {
          setLoginVisible(false);
          Message.success('修改密码成功！')
        }}
        onCancel={() => setLoginVisible(false)}
        autoFocus={false}
        focusLock={true}
      >
        <Form size="default" scrollToFirstError>
          <FormItem
            label="旧密码:"
            field="id"
            rules={[{ required: true, message: '请输入旧密码' }]}
          >
            <Input.Password placeholder="..." />
          </FormItem>
          <FormItem
            label="新密码:"
            field="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password placeholder="..." />
          </FormItem>
          <FormItem
            label="确认密码:"
            field="password"
            rules={[{ required: true, message: '请确认新密码密码' }]}
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
  );
};
export default MyInfo;
