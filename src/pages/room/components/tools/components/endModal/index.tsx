import React, { useState } from 'react';
import './index.less';
import { ReactComponent as EndIcon } from '@/images/end.svg';
import { Modal, Button } from '@arco-design/web-react';
import { IconExclamationCircle } from '@arco-design/web-react/icon';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { showExitModal, videoAndMicroList } from '@/store/index';
import { useMemoizedFn } from 'ahooks';
import { history } from 'umi';
interface IProps {}
const EndModal: React.FC<IProps> = (props) => {
  const showExitModalValue = useRecoilValue<boolean>(showExitModal);
  const videoAndMicroListValue = useRecoilValue(videoAndMicroList);
  const setShowExitModalValue = useSetRecoilState<boolean>(showExitModal);
  const query: any = history.location.query;
  const exitMeeting = useMemoizedFn(() => {
    let meetingFlag = JSON.parse(localStorage.getItem('meetingFlag') || '{}');
    let meetings: any = JSON.parse(localStorage.getItem('meetingInfo') || '{}');
    const newArr = videoAndMicroListValue.filter((item) => {
      return item.name !== query?.name;
    });
    meetings[query.id].personList = [...newArr];
    meetingFlag[query.id][query.name] = false;
    localStorage.setItem('meetingInfo', JSON.stringify(meetings));
    localStorage.setItem('meetingFlag', JSON.stringify(meetingFlag));
    localStorage.setItem('join-again', location.pathname + location.search);
    setShowExitModalValue(false);
    history.push('/end');
  });
  const exitMeetingAll = useMemoizedFn(() => {
    let meetingFlag = JSON.parse(localStorage.getItem('meetingFlag') || '{}');
    meetingFlag[query?.id].isAlive = false
    localStorage.setItem('meetingFlag', JSON.stringify(meetingFlag));
    setShowExitModalValue(false);
    history.push('/end?finish=1');
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
            {query?.host === 'true' ? (
              <Button
                type="outline"
                status="danger"
                onClick={exitMeetingAll}
                style={{ marginLeft: 192 }}
              >
                全员结束会议
              </Button>
            ) : null}
            <Button type="primary" status="danger" onClick={exitMeeting}>
              离开会议
            </Button>
          </>
        }
        autoFocus={false}
        focusLock={true}
      >
        <p className="end-title">确定要离开当前会议吗？</p>
        {query?.host === 'true' ? (
          <p className="end-intro">若仅自己离开，系统会自动指派一名主持人</p>
        ) : null}
      </Modal>
    </>
  );
};
export default EndModal;
