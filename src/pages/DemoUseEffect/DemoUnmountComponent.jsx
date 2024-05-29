import React, { useEffect } from 'react'

const socketMethod = ()=>{
    console.log('call api')
}
const DemoUnmountComponent = () => {
    useEffect(()=>{
        const timeout = setInterval(socketMethod, 1000);
        return ()=>{
            // Nơi clear những hàm chạy ngầm của ứng dụng khi component không còn trên dom(div#root) nữa
            clearInterval(timeout);
        }
    }, [])
  return (
    <div>DemoUnmountComponent</div>
  )
}

export default DemoUnmountComponent