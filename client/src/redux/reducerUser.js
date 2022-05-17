import {createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

 
export const getusers = createAsyncThunk ("users/getusers", async ()=>{
    const res = await axios.get('/api/users')
    console.log(res.data.users)
    return (res.data.users)    
      
})


const userSlice  = createSlice ({
    name: "users" ,
    initialState : [],
    extraReducers: {

        [getusers.pending] :  (state)=>{
             state=[];
             
          },
          [getusers.fulfilled]:(state, { payload })=>{
            
            return payload
            
          },
          [getusers.rejected]:(state)=>{
            state=[];
          }
}

})


export default userSlice.reducer


