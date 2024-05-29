import React from 'react'

const Loading = () => {
  return (
    <div style={{
        width:'100%',
        height:'100%',
        position:'fixed',
        top:0,
        left:0,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        background:'rgba(0,0,0,0.5)',
        zIndex:'100'
    }}>
        <img src='/img/loading.gif' alt='loading' />
    </div>
  )
}

export default Loading