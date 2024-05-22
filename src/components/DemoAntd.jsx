import React, { useState } from 'react'
import { Rate } from 'antd';
import { Button, message, Space } from 'antd';
import RefIcon from '@ant-design/icons/lib/icons/AlertTwoTone';
import TableAntd from './TableAntd';
const DemoAntd = () => {
    const [score, setScore] = useState(1);

    const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
      icon: <RefIcon />
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'This is an error message',
    });
  };
  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'This is a warning message',
    });
  };

  return (
    <div className="container">
      <h3 className="text-center">Sử dụng antd component</h3>
      <h4>Demo Rate</h4>
      <h5>{score}</h5>
      <Rate
        allowHalf
        defaultValue={score}
        onChange={(value) => {
          setScore(value);
        }}
      />
    <br />
    <h4>Demo message</h4>
      {contextHolder}
      <Space>
        <Button onClick={success} >Success</Button>
        <Button onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button>
      </Space>
      <h4>Table</h4>
      <TableAntd />
    </div>
  );
}

export default DemoAntd