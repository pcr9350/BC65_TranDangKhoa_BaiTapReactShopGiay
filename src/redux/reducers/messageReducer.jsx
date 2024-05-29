import { createSlice } from '@reduxjs/toolkit'

export const statusMessage = {
    success:'success',
    error:'error',
    warning:'warning'
}

export const contentMessageUserAdd = {
    addUserSuccess: 'Create user successfully',
    addUserFail: 'Create user failure'
}
export const messageContent = (type,content) => {
    return {
        type,
        content
    }
}

const initialState = {
    message: {
        type:'success',
        content:'success'
    }
}

const messageReducer = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessageAction: (state,action)=>{
        state.message = action.payload
    }
  }
});

export const {setMessageAction} = messageReducer.actions

export default messageReducer.reducer