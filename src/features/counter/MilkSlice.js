import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';














export const MilkSilce=createSlice(

{
  name:"milk",
  initialState:{
    value:0
  },
  reducers:{
    addMilk:(state)=>{
      if(state.value===0 || state.value>0){
      state.value+=1}
      else state.value=0
    },
    removeMilk:(state)=>{
      if(state.value>0){
    state.value-=1}
      else state.value=0
    }
  }
}
)

export const { addMilk ,removeMilk} = MilkSilce.actions
export  default MilkSilce.reducer
