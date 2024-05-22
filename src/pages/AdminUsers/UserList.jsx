import React, { useEffect } from 'react'
import { Space, Table, Tag } from 'antd';
import { NavLink } from 'react-router-dom';
import useRedux from '../../CustomHook/useRedux';
import { getUserListActionApi} from '../../redux/reducers/userReducer';

// biến 
const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (text,record) => <NavLink to={`admin/detail/${record.email}`}>{text}</NavLink>,
    },
    {
        title: 'Họ tên',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <span>{text}</span>,
    },
    {
        title: 'Điện thoại',
        dataIndex: 'phone',
        key: 'phone',
        render: (text) => <span>{text}</span>,
      },
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
//   const data = [
//     {
//         "key": 1,
//         "id": 1,
//         "email": "admin",
//         "name": "admin",
//         "password": "123",
//         "gender": true,
//         "phone": "123444",
//         "facebookId": "",
//         "userTypeId": "CUSTOMER",
//         "deleted": false,
//         "avatar": "user-icon.png",
//         "favoriteProducts": "[{\"id\":2,\"name\":\"Adidas Prophere Black White\",\"image\":\"https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png\"},{\"id\":17,\"name\":\"Van Old School\",\"image\":\"https://shop.cyberlearn.vn/images/van-old-school.png\"}]"
//       },
//   ];

const UserList = () => {
    const {state,dispatch} = useRedux();
    const {userList} = state.userReducer;

    useEffect(()=>{
        const actionThunk = getUserListActionApi();
        dispatch(actionThunk)
    },[])
  return (
    <div className='container'>
        <h3>User List</h3>
        <Table columns={columns} dataSource={userList} />;
    </div>
  )
}

export default UserList