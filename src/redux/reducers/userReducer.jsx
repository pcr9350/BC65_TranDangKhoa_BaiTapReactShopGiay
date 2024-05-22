// rxslice
import { createSlice } from '@reduxjs/toolkit'
import { httpStore } from '../../util/config';
import { TOKEN_AUTHOR, USER_LOGIN, getDataJsonStorage, setCookie, setDataJsonStorage, setDataTextStorage } from '../../util/utilFunction';

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
    }
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
    setDataTextStorage(TOKEN_AUTHOR, res.data.content.accessToken);
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
}
