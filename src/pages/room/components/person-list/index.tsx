import React, { useState, useEffect } from 'react';
import './index.less';
import { ReactComponent as MicroIcon } from '@/images/micro.svg';
import { ReactComponent as NoMicroIcon } from '@/images/no-micro.svg';
import { ReactComponent as VideoIcon } from '@/images/video.svg';
import { ReactComponent as NoVideoIcon } from '@/images/no-video.svg';
import { Tag, Button, Tooltip, Modal, Input } from '@arco-design/web-react';
import { IconPushpin } from '@arco-design/web-react/icon';
import { useRecoilValue } from 'recoil';
import { history } from 'umi';
import {
  videoAndMicroList,
  hasOneToOne,
  oneToOneMessageList,
} from '@/store/index';
import { useMemoizedFn } from 'ahooks';
interface IProps {}
interface PersonInfo {
  name: string;
  color: string;
  isMe: boolean;
  isOwner: boolean;
}
const PersonList: React.FC<IProps> = (props) => {
  const videoAndMicroListValue = useRecoilValue(videoAndMicroList);
  const name = history.location.query?.name;
  const [modalVisble, setModalVisble] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const oneToOneMessageListValue = useRecoilValue(oneToOneMessageList);
  const hasOneToOnvalue = useRecoilValue(hasOneToOne);
  useEffect(() => {
    if (hasOneToOnvalue && !modalVisble) {
      setModalVisble(true);
    }
  }, [hasOneToOnvalue]);
  const setOneList = useMemoizedFn(() => {
    localStorage.setItem(
      'oneToOneMessageList',
      JSON.stringify([
        ...oneToOneMessageListValue,
        {
          value: inputValue,
          name,
          color: history.location.query?.color,
        },
      ]),
    );
    setInputValue('');
  });
  return (
    <>
      <Modal
        title={modalTitle}
        visible={modalVisble}
        onOk={() => setModalVisble(false)}
        onCancel={() => setModalVisble(false)}
        autoFocus={false}
        footer={null}
      >
        <div className="one-container">
          {oneToOneMessageListValue.map((item) => {
            return (
              <>
                {item.name === name ? (
                  <div className="one-me">
                    <div className="one-message">{item.value}</div>
                    <div
                      className="avatar"
                      style={{
                        background: '#' + item.color,
                        marginLeft: 10,
                      }}
                    >
                      {item.name?.substring
                        ? item.name.substring(item.name.length - 2)
                        : item.name}
                    </div>
                  </div>
                ) : (
                  <div className="one-other">
                    <div
                      className="avatar"
                      style={{
                        background: '#' + item.color,
                        marginRight: 10,
                      }}
                    >
                      {item.name?.substring
                        ? item.name.substring(item.name.length - 2)
                        : item.name}
                    </div>
                    <div className="one-message">{item.value}</div>
                  </div>
                )}
              </>
            );
          })}
        </div>
        <div className="line"></div>
        <Input
          onPressEnter={setOneList}
          style={{ width: 400, marginTop: 14, marginRight: 10 }}
          allowClear
          value={inputValue}
          onChange={(v) => {
            setInputValue(v);
          }}
          placeholder="我好想说点什么"
        />
        <Button onClick={setOneList} type="primary">
          发送
        </Button>
      </Modal>
      <div className="join-person-title">
        参会人
        <span
          style={{
            marginLeft: 14,
          }}
        >
          (1)
        </span>
      </div>
      <div className="person-list">
        {videoAndMicroListValue && videoAndMicroListValue.map((item) => {
          return (
            <div className="person-list-item" key={item.name}>
              <div className="info">
                <div
                  className="avatar"
                  style={{
                    background: '#' + item.color,
                  }}
                >
                  {item.name?.substring
                    ? item.name.substring(item.name.length - 2)
                    : item.name}
                </div>
                <div className="name">
                  {item.name}
                  {item.name === name ? '（我）' : ''}
                  {item.isOwner ? (
                    <div className="isOwner">
                      <Tag checkable size="small" color="red" defaultChecked>
                        主持人
                      </Tag>
                    </div>
                  ) : null}
                </div>
              </div>
              <div
                className="icons"
                style={{
                  margin: '0 12px',
                }}
              >
                {item.name !== name ? (
                  <div className="icon-item">
                    <Tooltip mini content="发起私聊">
                      <IconPushpin
                        onClick={() => {
                          setModalTitle(item.name);
                          setModalVisble(true);
                        }}
                        style={{
                          width: 18,
                          height: 18,
                        }}
                      />
                    </Tooltip>
                  </div>
                ) : null}

                <div className="icon-item">
                  {item.video ? (
                    <VideoIcon></VideoIcon>
                  ) : (
                    <NoVideoIcon></NoVideoIcon>
                  )}
                </div>
                <div className="icon-item">
                  {item.micro ? (
                    <MicroIcon className="yes-icon"></MicroIcon>
                  ) : (
                    <NoMicroIcon></NoMicroIcon>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default PersonList;
