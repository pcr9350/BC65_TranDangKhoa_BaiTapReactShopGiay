import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { userApi } from '../../services/apiStore/user/userApi';
import { Button } from 'antd';

const ReactQueryUserPaging = () => {
    const [page, setPage] = useState(1);
    const {data, isLoading} = useQuery({
        queryKey: ['getAllUserPaging', page],
        queryFn: userApi.getAllPaging,
    })

    const renderPagingNumber = (dataResult) => {
        if(dataResult) {
        const pages = data?.totalRow/data?.pageSize;
        let htmlButton = [];
        for(let pageIndex = 1; pageIndex <= pages; pageIndex++){
           let button = <Button className='btn btn-primary mx-1' onClick={()=>{
            setPage(pageIndex)
           }}>{pageIndex}</Button>
            htmlButton.push(button);
        }
   
        return htmlButton;
    }
    }
  return (
    <div className='container'>
        <h3>React query paging</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>phone</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data?.items?.map((user,index)=>{
                    return <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                })}
            </tbody>
        </table>
        <div className='mt-2'>
                {renderPagingNumber(data)}
        </div>

    </div>
  )
}

export default ReactQueryUserPaging