import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { userApi } from '../../services/apiStore/user/userApi'
import { Space, Table } from 'antd';
import { NavLink } from 'react-router-dom';

const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (text,record) => <NavLink to={`/admin/detail/${record.email}`}>{text}</NavLink>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'phone',
      dataIndex: 'phone',
      key: 'phone',
      render: (number) => <span>{number}</span>,
    }
    ,
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

const ReactQueryUsers = () => {
    const {isLoading, isPending, data, error} = useQuery({
        queryKey:['userListApi'],
        queryFn: userApi.getAll,
        staleTime: 3 * 60 * 1000, // 3 phút sau dữ liệu mới cũ
        cacheTime: 5 * 60 * 1000, // thời gian lưu dữ liệu trong cache
        refetchOnWindowFocus: true, //kích vào cửa sổ browser thì queryFn chạy
    })

  return (
    <div className='container'>
        <h3>User List</h3>

        {isLoading ? <span>Loading...</span> :
        <Table columns={columns} dataSource={data} loading={isLoading}/>}
    </div>
  )
}

export default ReactQueryUsers