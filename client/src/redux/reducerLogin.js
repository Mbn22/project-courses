import {  createSlice ,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


export const getlogin = createAsyncThunk ("login/getlogin", async ()=>{
  const res = await axios.get( "/api/login/")
  console.log(res.data)
  return (res.data)    
    
})




const initialState = {
  user:{},
  isloggedin:false,
  loading: 'idle',
}



const loginSlice  = createSlice ({
    name: "login" ,
    initialState   ,
    reducers : {

      logout : 
      (state,action)=>{
        axios.get("/api/logout")
       
      state.isloggedin =false;
      state.user = null
        
      }
  }
  ,
extraReducers: {
  /// loading: 'idle' | 'pending' | 'succeeded' | 'failed'

  [getlogin.pending] :  (state, { payload })=>{
       state.loading = 'pending'
       
    },
    [getlogin.fulfilled]:(state, { payload })=>{
      
      state.user = payload.user
      state.isloggedin = payload.isloggedin
      state.loading = 'succeeded'
      
    },
    [getlogin.rejected]:(state)=>{
      state.loading = 'failed' }
}
  }

)
export const { logout } = loginSlice.actions
export default loginSlice.reducer

