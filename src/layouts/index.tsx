import React, { useState } from 'react'
import './index.less'
import "@arco-design/web-react/dist/css/arco.css";
interface IProps { }
const LayoutPage: React.FC<IProps> = (props) => {
    console.log(props.children)
    return <div>{props.children}</div>;
}
export default LayoutPage