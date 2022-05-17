import {  createSlice ,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';



const loginSlice  = createSlice ({
    name: "login" ,
    initialState : {user:{}, isloggedin : false }  ,
    reducers : {

      getlogin:(state,action)=>{

        state = action.payload
        return state
      },
      
       
      logout : 
      (state,action)=>{
        axios.get("/api/logout")
       
      state.isloggedin =false;
      state.user = null
        
      }
  }
  }

)
export const {getlogin ,  logout } = loginSlice.actions
export default loginSlice.reducer

