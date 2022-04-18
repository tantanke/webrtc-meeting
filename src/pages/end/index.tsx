import React, { useState } from 'react';
import './index.less';
import { Button, Space } from '@arco-design/web-react';
interface IProps {}
const EndPage: React.FC<IProps> = (props) => {
  return (
    <div className="end-page-container">
      <h1 className="title">你已离开会议</h1>
      <div className='btns'>
        <Button type='outline'>重新加入</Button>
        <Button  type="primary" >返回首页</Button>
      </div>
    </div>
  );
};
export default EndPage;
