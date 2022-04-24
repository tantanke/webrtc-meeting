import React, { useState } from 'react';
interface IProps {}
import { Table } from '@arco-design/web-react';
const columns = [
  {
    title: '会议ID',
    dataIndex: 'id',
  },
  {
    title: '会议名称',
    dataIndex: 'name',
  },
  {
    title: '开始时间',
    dataIndex: 'beginTime',
  },
  {
    title: '结束时间',
    dataIndex: 'endTime',
  }, {
    title: '入会链接',
    dataIndex: 'link',
  },
];

const data = [
  {
   id:'823453239',
   name:'谭达科的测试会议',
   beginTime:'2022-04-24 13:00:00',
   endTime:'2022-04-24 15:00:00',
   link:'http://localhost:8000/room?name=123&host=true&topic=123&order=1&color=ECAD9E&id=583562679'
  },
 
];
const MeetingDate: React.FC<IProps> = (props) => {
  return (
    <>
      <div className="right-title">会议日程</div>
      <div>
        <Table columns={columns} data={data} />
      </div>
    </>
  );
};
export default MeetingDate;
