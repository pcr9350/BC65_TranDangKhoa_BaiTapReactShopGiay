import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { userApi } from '../../services/apiStore/user/userApi'
import { Space, Table } from 'antd';
import { NavLink } from 'react-router-dom';


  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: {
        compare: (a, b) => a.name - b.name,
        multiple: 3,
      },
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: {
        compare: (a, b) => a.price - b.price,
        multiple: 2,
      },
    },
    {
      title: 'Image',
      dataIndex: 'image',
      render: (text) => <img src={`${text}`} height={50} width={50}></img>,
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra)
  };
const ReactQueryUsersMockApi = () => {
    const {isLoading, isPending, data, error} = useQuery({
        queryKey:['userListApi'],
        queryFn: userApi.getAllMockApi,
        staleTime: 3 * 60 * 1000, // 3 phút sau dữ liệu mới cũ
        cacheTime: 5 * 60 * 1000, // thời gian lưu dữ liệu trong cache
        refetchOnWindowFocus: true, //kích vào cửa sổ browser thì queryFn chạy
    })

  return (
    <div className='container'>
        <h3>Product List</h3>

        {isLoading ? <span>Loading...</span> :
        // <Table columns={columns} dataSource={data} loading={isLoading}/>
        <Table columns={columns} dataSource={data} onChange={onChange} loading={isLoading}/>
    }

    </div>
  )
}

export default ReactQueryUsersMockApi