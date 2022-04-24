import React, { useState } from 'react';
import './index.less';
import { Button, Space } from '@arco-design/web-react';
import { history } from 'umi';
interface IProps {}
const EndPage: React.FC<IProps> = (props) => {
  const query: any = history.location.query;
  return (
    <div className="end-page-container">
      <h1 className="title">
        {query.finish === '1' ? '会议已结束' : '你已离开会议'}
      </h1>
      <div className="btns">
        {query.finish === '1' ? (
          <Button
            type="primary"
            onClick={() => {
              history.push('/home');
            }}
          >
            返回首页
          </Button>
        ) : (
          <>
            <Button
              type="outline"
              onClick={() => {
                history.push(localStorage.getItem('join-again') || '/home');
              }}
            >
              重新加入
            </Button>
            <Button
              type="primary"
              onClick={() => {
                history.push('/home');
              }}
            >
              返回首页
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
export default EndPage;
