import React, { forwardRef, useState } from 'react'

const ChildRefComponent = forwardRef( (props,ref) => {
    const [state, setState]= useState(1);
    ref.current.setState = ()=>{
        setState(state+1);
    }
  return (
    <div className='bg-dark text-white p-2 mt-2'>
        <button className='btn btn-warning' onClick={()=>{
            setState(state+1);
        }}>{state}</button>
    </div>
  )
})

export default ChildRefComponent