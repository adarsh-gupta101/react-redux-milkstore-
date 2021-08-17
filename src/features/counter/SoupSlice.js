import { createSlice } from '@reduxjs/toolkit';














export const SoupSlice=createSlice(

{
  name:"bread",
  initialState:{
    value:0
  },
  reducers:{
    addSoup:(state)=>{
      if(state.value>0 || state.value===0){
    state.value+=1}
      else state.value=0
    },
    removeSoup:(state)=>{
      if(state.value>0){
    state.value-=1}
      else state.value=0
    }
  }
}
)

export const { addSoup ,removeSoup} = SoupSlice.actions
export  default SoupSlice.reducer
