import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false
}

const loadingReducer = createSlice({
  name: 'loadingReducer',
  initialState,
  reducers: {
    setLoadingAction: (state,action) => {
        state.isLoading = action.payload
    }  
  }
});

export const {setLoadingAction} = loadingReducer.actions

export default loadingReducer.reducer