import React, { useEffect, useState } from 'react'

/*
<ResponsiveItem component={<DesktopComponent />} mobileComponent={<MobileComponent />} />
    props = {
        component: <DesktopComponent />
        mobileComponent: <MobileComponent />
    }
*/
const ResponsiveItem = (props) => {
    const [component, setComponent] = useState(props.component);
    const [screen,setScreen] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    const changeWindow = ()=>{
        setScreen({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(()=>{
        window.addEventListener('load', changeWindow);
        window.addEventListener('resize', changeWindow);
        return ()=>{
            window.removeEventListener('load', changeWindow);
        window.removeEventListener('resize', changeWindow);
        }
    }, [])

    useEffect(()=>{
        if (screen.width <= 768 && props.mobileComponent) {
            setComponent(props.mobileComponent);
        }else {
            setComponent(props.component);
        }
    },[screen.width]);
    
    // Xử lý kích thước màn hình để render component tương ứng
  return (
    <>
    {component}
    </>
  )
}

export default ResponsiveItem