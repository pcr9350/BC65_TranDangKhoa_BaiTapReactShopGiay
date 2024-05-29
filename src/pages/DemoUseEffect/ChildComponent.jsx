import React, { useEffect } from 'react'

const ChildComponent = () => {
    // console.log('child component mount')
    useEffect(()=>{
        // console.log('child useEffect')
    })
  return (
    <div className='bg-dark text-white p-2'>
        Child component
    </div>
  )
}

export default ChildComponent