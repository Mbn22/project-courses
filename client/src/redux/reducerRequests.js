import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getrequests = createAsyncThunk ("requests/getrequests" , async ()=>{

  const res = await axios.get('/api/requests')
 
  return (res.data.reqs)   

})




const requestsSlice  = createSlice ({
    name: "requests" ,
    initialState : [],
    reducers : {
        approve : (state,action)=>{
        axios.post(`/api/requests/request/${action.payload}`).then(res=>console.log("ok"))
          }
    } ,

    extraReducers: {

      [getrequests.pending] :  (state)=>{
           state=[];
           
        },
        [getrequests.fulfilled]:(state, { payload })=>{
          
          return payload
          
        },
        [getrequests.rejected]:(state)=>{
          state=[];
        }

}


})

export const {approve } = requestsSlice.actions
export default requestsSlice.reducer


