// const stateDefault = {
//     danhSachGheDangDat:[
//         {soGhe:'A1',gia:1000}
//     ]
// }

// const datVeReducer = (state = stateDefault,action)=>{
//     switch(action.type){
//         default:return{...state}
//     }
// }
// export default datVeReducer;
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
        danhSachGheDangDat:[
        {soGhe:'A1',gia:75000}
        
    ]
}

const datVeReducer = createSlice({
  name: 'datVeReducer',
  initialState,
  reducers: {
    datGhe: (state,action)=>{
        let ghe = action.payload;
        // console.log(ghe)
        // console.log(soGhe)
        let index = state.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
        if(index !== -1){
            state.danhSachGheDangDat.splice(index,1);
        }else{{
            state.danhSachGheDangDat.push(ghe);
        }}
    },
    huyGhe: (state,action)=>{
      let ghe = action.payload;
        let index = state.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
        if(index !== -1){
          state.danhSachGheDangDat.splice(index,1);
        }
    }
  }
});

export const {datGhe, huyGhe} = datVeReducer.actions

export default datVeReducer.reducer