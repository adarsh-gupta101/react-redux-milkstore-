import {  createSlice } from '@reduxjs/toolkit';












export const Slice=createSlice({
  name:"butter",
  initialState:{
    value:0
  },
  reducers:{
    addButter:(state)=>{
      if(state.value===0 || state.value>0){
      state.value+=1}
      else state.value=0
    },
    removeButter:(state)=>{
        if(state.value>0){
      state.value-=1}
        else state.value=0
    }
  }
}

)

export const { addButter, removeButter } = Slice.actions
export default Slice.reducer
