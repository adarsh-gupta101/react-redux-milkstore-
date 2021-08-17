import { createSlice } from '@reduxjs/toolkit';














export const BreadSlice=createSlice(

{
  name:"bread",
  initialState:{
    value:0
  },
  reducers:{
    addBread:(state)=>{
      if(state.value>0 || state.value===0){
    state.value+=1}
      else state.value=0
    },
    removeBread:(state)=>{
      if(state.value>0){
    state.value-=1}
      else state.value=0
    }
  }
}
)

export const { addBread ,removeBread} = BreadSlice.actions
export  default BreadSlice.reducer
