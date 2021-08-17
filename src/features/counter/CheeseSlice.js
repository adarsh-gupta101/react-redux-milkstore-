import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';














export const CheeseSilce=createSlice(

{
  name:"bread",
  initialState:{
    value:0
  },
  reducers:{
    addCheese:(state)=>{
      if(state.value>0 || state.value===0){
    state.value+=2}
      else state.value=0
    },
    removeCheese:(state)=>{
      if(state.value>0){
    state.value-=1}
      else state.value=0
    }
  }
}
)

export const { addCheese ,removeCheese} = CheeseSilce.actions
export  default CheeseSilce.reducer
