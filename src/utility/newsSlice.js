import { createSlice } from "@reduxjs/toolkit";


const newsSlice=createSlice({
    name:"news",
    initialState:{
        news:null,
    },
    reducers:{
        addNews:(state,action)=>{
            state.news=action.payload
        }
    }
})

export const {addNews}=newsSlice.actions;
export default newsSlice.reducer;