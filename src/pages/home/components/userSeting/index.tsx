import React, { useState } from 'react';
import './index.less';
import {
  IconBook,
  IconToLeft,
  IconSend,
  IconEar,
} from '@arco-design/web-react/icon';
import {
  Menu,
  Space,
  Dropdown,
  Drawer,
  Message,
  Form,
  DatePicker,
  Notification,
  Input,
} from '@arco-design/web-react';
import {history} from 'umi'
import { useMemoizedFn } from 'ahooks';
interface IProps {
  loginOut: () => void;
}
const FormItem = Form.Item;
const UserSeting: React.FC<IProps> = (props) => {
  const [infoDrawerVisble, setInfoDrawerVisble] = useState<boolean>(false);
  const [makeDrawerVisble, setMakeDrawerVisble] = useState<boolean>(false);
  const [dateDrawerVisble, dateInfoDrawerVisble] = useState<boolean>(false);
  const [makeFormData, setMakeFormData] = useState<null | any>(null);
  const [dateFormData, setDateFormData] = useState<null | any>(null);
  const onClickMenuItem = useMemoizedFn((key) => {
    if (key === 'info') {
      history.push('/manage/info')
    } else if (key === 'exit') {
      props.loginOut();
    } else if (key === 'make') {
      setMakeDrawerVisble(true);
    } else if (key === 'date') {
      dateInfoDrawerVisble(true);
    }
  });
  const onLoginValuesChange = useMemoizedFn(
    (changeValue: unknown, values: unknown) => {
      setMakeFormData(values);
    },
  );
  const onDateValuesChange = useMemoizedFn(
    (changeValue: unknown, values: unknown) => {
        setDateFormData(values);
    },
  );
  const dropList = (
    <Menu onClickMenuItem={onClickMenuItem}>
      <Menu.Item key="info">
        <IconEar style={{ marginRight: 16 }} />
        个人信息
      </Menu.Item>
      <Menu.Item key="make">
        <IconSend style={{ marginRight: 16 }} />
        预约会议
      </Menu.Item>
      <Menu.Item key="date">
        <IconBook style={{ marginRight: 16 }} />
        加入日程
      </Menu.Item>
      <Menu.Item key="exit">
        <IconToLeft style={{ marginRight: 16 }} />
        退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Drawer
        width={500}
        title={<span>加入日程</span>}
        visible={dateDrawerVisble}
        closable={false}
        onOk={() => {
          dateInfoDrawerVisble(false);
          Notification.success({
            position: 'topLeft',
            closable: false,
            title: '日程提醒',
            content: '加入日程成功！请在个人信息->日程记录中查看',
          });
        }}
        onCancel={() => {
          dateInfoDrawerVisble(false);
        }}
      >
        <Form
          size="default"
          onValuesChange={onDateValuesChange}
          scrollToFirstError
        >
          <FormItem
            label="日程ID:"
            field="dateid"
            rules={[{ required: true, message: '请输入日程ID' }]}
          >
            <Input placeholder="..." />
          </FormItem>
        </Form>
      </Drawer>
      <Drawer
        width={500}
        title={<span>预约会议</span>}
        visible={makeDrawerVisble}
        closable={false}
        onOk={() => {
          setMakeDrawerVisble(false);
          Notification.success({
            position: 'topLeft',
            closable: false,
            title: '预约提醒',
            content: '预约成功！请在个人信息->会议预约记录中查看',
          });
        }}
        onCancel={() => {
          setMakeDrawerVisble(false);
        }}
      >
        <Form
          size="default"
          onValuesChange={onLoginValuesChange}
          scrollToFirstError
        >
          <FormItem
            label="会议主题:"
            field="id"
            rules={[{ required: true, message: '请输入会议主题' }]}
          >
            <Input placeholder="..." />
          </FormItem>
          <FormItem
            label="开始时间:"
            field="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <DatePicker
              style={{
                width: 370,
              }}
              showTime={{ defaultValue: '04:05:06' }}
              format="YYYY-MM-DD HH:mm:ss"
            />
          </FormItem>
          <FormItem
            label="结束时间:"
            field="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <DatePicker
              style={{
                width: 370,
              }}
              showTime={{ defaultValue: '04:05:06' }}
              format="YYYY-MM-DD HH:mm:ss"
            />
          </FormItem>
        </Form>
      </Drawer>
      <Space>
        <Dropdown droplist={dropList} position="bottom">
          <div className="login-icon">达科</div>
        </Dropdown>
      </Space>
    </>
  );
};
export default UserSeting;
