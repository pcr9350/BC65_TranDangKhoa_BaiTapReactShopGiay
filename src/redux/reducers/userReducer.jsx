// rxslice
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { httpStore } from '../../util/config';
import { TOKEN_AUTHOR, USER_LOGIN, getDataJsonStorage, setCookie, setDataJsonStorage, setDataTextStorage } from '../../util/utilFunction';
import { historyRouter } from "../../main";
import { setLoadingAction } from "./loadingReducer";
import {
  contentMessageUserAdd,
  setMessageAction,
  statusMessage,
} from "./messageReducer";

const initialState = {
    userLogin: getDataJsonStorage(USER_LOGIN),
    userList: [{
      "key": 1,
        "id": 1,
        "email": "admin",
        "name": "admin",
        "password": "123",
        "gender": true,
        "phone": "123444",
        "facebookId": "",
        "userTypeId": "CUSTOMER",
        "deleted": false,
        "avatar": "user-icon.png",
        "favoriteProducts": "[{\"id\":2,\"name\":\"Adidas Prophere Black White\",\"image\":\"https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png\"},{\"id\":17,\"name\":\"Van Old School\",\"image\":\"https://shop.cyberlearn.vn/images/van-old-school.png\"}]"
}]
}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    loginAction: (state,action) => {
      state.userLogin = action.payload;
    },
    getUserListAction: (state, action) => {
      state.userList = action.payload;
    },
  }, extraReducers: (builder) =>{
    builder.addCase(addUserActionAsync.fulfilled,(state,action) => {
        console.log('success',state,action)
    });
    builder.addCase(addUserActionAsync.pending,(state,action) => {
        console.log('pending')
    });
    builder.addCase(addUserActionAsync.rejected, (state,action) => {
        console.log('error',state,action)
    })

  }
});

export const {loginAction, getUserListAction} = userReducer.actions

export default userReducer.reducer

// ------------Action Thunk--------
export const loginActionApi = (email,password) => {
  // trước khi dispatch chạy

  return async (dispatch) => {
    // Xử lý api
    const res = await httpStore.post('/api/Users/signin', {email,password});

    const actionCreator = loginAction(res.data.content);
    dispatch(actionCreator);

    // Lưu cache client
    setDataJsonStorage(USER_LOGIN, res.data.content);
    setDataJsonStorage(TOKEN_AUTHOR, res.data.content.accessToken);
    setCookie(TOKEN_AUTHOR, res.data.content.accessToken);
  }
};

export const getUserListActionApi = () => {

  return async (dispatch) => {
    //xử lý api
    const res = await httpStore.get('/api/Users/admin');
    const actionPayload = getUserListAction(res.data.content);
    dispatch(actionPayload);
  }
};

// Cách 1
export const addUserActionApi = (userRegister) => {
  return async (dispatch, getState) => {
    // const state = getState() //trả về object state 
    try {
      // trước khi gọi api hiển thị loading
      const actionLoading = setLoadingAction(true);
      dispatch(actionLoading);

      const res = await httpStore.post(
        "/api/users/signup",
        userRegister
      ); //trong khi gọi api

      //sau khi thêm user thành công thì gọi lại logic api của getAll
      const actionThunk = getUserListActionApi();
      dispatch(actionThunk);

      historyRouter.push("/admin/users");
      // console.log(res)
      // Sau khi thêm dữ liệu thành công
      const actionNotify = {
        type: statusMessage.success,
        content: contentMessageUserAdd.addUserSuccess,
      };
      const messageAction = setMessageAction(actionNotify);
      dispatch(messageAction);
    } catch (err) {
      //Sau khi thêm dữ liệu thành công
      const actionNotify = {
        type: statusMessage.error,
        content: contentMessageUserAdd.addUserFail,
      };
      const messageAction = setMessageAction(actionNotify);
      dispatch(messageAction);
    } finally {
      const actionLoadingFinal = setLoadingAction(false);
      dispatch(actionLoadingFinal);
    }
  };
};

// cách 2 Dùng thư viện từ redux toolkit để tạo ra action async
export const addUserActionAsync = createAsyncThunk(
  'userReducer/addUserActionAsync',
  async (userRegister, {dispatch,getState}) => {
      const actionLoading = setLoadingAction(true);
      dispatch(actionLoading)
      try{
      const res = await httpStore.post('/api/users/signup', userRegister);
      return res.data.content //return về giá trị nào thì ta sẽ nhận được giá trị đó tại fullfil của extrareducer
      }catch (err){
          return Promise.reject(err);
      }finally {
          const actionLoading = setLoadingAction(false);
          dispatch(actionLoading)
          return 'finally' //return về giá trị nào thì ta sẽ nhận được giá trị đó tại fullfil của extraReducer
      }
      
  },
)