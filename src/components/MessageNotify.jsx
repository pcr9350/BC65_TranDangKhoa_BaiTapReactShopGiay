import React, { useEffect } from 'react'
import useRedux from '../CustomHook/useRedux';
import { message } from 'antd';
const MessageNotify = () => {
    //Lấy state message về từ redux 
    const { state, dispatch } = useRedux();
    const {type,content} = state.messageReducer.message;
    console.log(state)
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(()=>{
        messageApi.open({
            type,
            content
        })
    }, [state.messageReducer.message])
  return (
    <>
    {contextHolder}

</>
  )
}

export default MessageNotify