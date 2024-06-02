import React, { useState } from 'react'
import HOCModal from './HOCModal';
import Login from '../pages/Login';
import DemoAntd from '../components/DemoAntd';
import ContainerModal from './ContainerModal';
import CreateUser from '../pages/AdminUsers/CreateUser';
import useRedux from '../CustomHook/useRedux';
import { openModalAction } from '../redux/reducers/modalReducer';


const LoginModalComponent = HOCModal('Login', Login);
const AntModalComponent = HOCModal('DemoAntd', DemoAntd);

//HOC: là component nhập vào tham số là component khác để tạo ra logic của chính nó với nội dung bên trong là component được truyền vào: HOCModal, HOCPaging ...
const DemoHOC = () => {
    const [component, setComponent] = useState(<div>Default</div>)
    const {dispatch, state} = useRedux();
  return (
    <div className="container">
      <h3
        draggable
        onDragStart={(props) => {
          const handleDragStart = (event) => {
            event.dataTransfer.setData("text/plain", props.children); //set drag data
          };
        }}
      >
        Demo HOC (Higher Order Component)
      </h3>
      {/* <!-- Button trigger modal --> */}

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => {
          setComponent(<Login />);
        }}
      >
        Login
      </button>
      <button
        type="button"
        className="btn btn-primary mx-2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => {
          setComponent(<CreateUser />);
        }}
      >
        Create User
      </button>

      {/* <LoginModalComponent /> */}
      {/* <AntModalComponent /> */}
      <hr />
      <h3>Container component</h3>
      <ContainerModal
        funcComponent={Login}
        title="Modal"
        jsxComponent={component}
      />
      <hr />
      <h3>Modal Redux</h3>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modal-redux"
        onClick={()=>{
            const payload = {
                modalTitle: 'Login',
                modalContent: <Login />
            }
            const action = openModalAction(payload);
            dispatch(action);
        }}
      >
        Open Modal redux: Login
      </button>
      <button
        type="button"
        className="btn btn-primary mx-2"
        data-bs-toggle="modal"
        data-bs-target="#modal-redux"
        onClick={()=>{
            const payload = {
                modalTitle: 'Create User',
                modalContent: <CreateUser />
            }
            const action = openModalAction(payload);
            dispatch(action);
        }}
      >
        Open Modal redux: Create User
      </button>
    </div>
  );
}

export default DemoHOC