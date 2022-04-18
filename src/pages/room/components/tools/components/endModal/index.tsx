import React, { useState } from 'react';
import './index.less';
import { ReactComponent as EndIcon } from '@/images/end.svg';
import { Modal, Button } from '@arco-design/web-react';
import { IconExclamationCircle } from '@arco-design/web-react/icon';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { showExitModal } from '@/store/index';
import { useMemoizedFn } from 'ahooks';
import { history } from 'umi';
interface IProps {}
const EndModal: React.FC<IProps> = (props) => {
  const showExitModalValue = useRecoilValue<boolean>(showExitModal);
  const setShowExitModalValue = useSetRecoilState<boolean>(showExitModal);
  const exitMeeting = useMemoizedFn(() => {
    setShowExitModalValue(false);
    history.push('/end')
  });
  return (
    <>
      <EndIcon onClick={() => setShowExitModalValue(true)}></EndIcon>
      <Modal
        closable={false}
        title={
          <>
            <IconExclamationCircle style={{ color: 'red', fontSize: 20 }} />
            退出会议
          </>
        }
        visible={showExitModalValue}
        footer={
          <>
            <Button onClick={() => setShowExitModalValue(false)}>取消</Button>
            <Button type="outline" status="danger" style={{ marginLeft: 192 }}>
              全员结束会议
            </Button>
            <Button type="primary" status="danger" onClick={exitMeeting}>
              离开会议
            </Button>
          </>
        }
        autoFocus={false}
        focusLock={true}
      >
        <p className="end-title">确定要离开当前会议吗？</p>
        <p className="end-intro">若仅自己离开，系统会自动指派一名主持人</p>
      </Modal>
    </>
  );
};
export default EndModal;
