import React, { useEffect, useRef, useState } from 'react'
import ChildRefComponent from './ChildRefComponent';

const DemoUseRef = () => {
    const [number, setNumber] = useState(1) // xử lý những giá trị thay đổi trên giao diện
    const refContent = useRef(''); // Dành cho các giá trị xử lý ngầm mà không cần đưa lên giao diện hiển thị
    const refDiv = useRef({});
    const refComponent = useRef({});
    // let content = '';
    // useEffect(()=>{
    //     const timeout = setInterval(()=>{
    //         count+=1;
    //     },1000);
    // },[])
    const handleSend = ()=>{
        // console.log(content);
        console.log(refContent.current)
        refDiv.current.className = 'p-2 bg-success text-white'
    }
    const handleSend2 = ()=>{
        // console.log(content);
        console.log(refContent.current)
        refDiv.current.className = 'p-2 bg-primary text-white'
    }
  return (
    <div className='container'>
        <h3>Use ref</h3>
        <div ref={refDiv} className="p-2 bg-primary text-white">
            
                UseRef:
                <br />
                <p>UseRef giúp gán lại giá trị của component sau mỗi lần render mà không phải load lại giao diện</p>
                <p>UseRef dùng để dom đến component hoặc các tag jsx</p>
           

        </div>
        <button className='btn btn-success mt-2' onClick={()=>{
            setNumber(number+1)
        }}>{number}</button>
        <br />
        <br />
        <input type="text" name="content" id="" className='w-25 form-control d-inline' onChange={(e)=>{
            refContent.current = e.target.value;
        }} />
        <button className='btn btn-success mx-4' onClick={handleSend}>Send lá cây</button>
        <button className='btn btn-primary' onClick={handleSend2}>Send xanh dương</button>
        <button className='btn btn-warning mx-4' onClick={()=>{
            refComponent.current.setState();
        }}>Click parent</button>
        <ChildRefComponent ref={refComponent}/>
    </div>
  )
}

export default DemoUseRef