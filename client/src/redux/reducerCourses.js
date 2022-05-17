import {createSlice ,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const GetCourses = createAsyncThunk ("courses/GetCourses", async ()=>{
  const res = await axios.get( "/api/courses/")
  console.log(res.data.users)
  return (res.data.courses)    
    
})


const arryCoursesSlice  = createSlice ({
    name: "courses" ,
    initialState : [],
    reducers : {

      
      addCourses : (state,action)=>{
        axios.post('/api/courses/add_course', action.payload ).then(res=>{ console.log(res.data) })
         state.push(action.payload)  }
      ,
     
     
      deleteCourse : (state,action)=>{
        axios.delete(`/api/courses/update_course/${action.payload}`)
        .then((res) => console.log("del ok"))

        return state.filter((t)=> t._id !== action.payload);
        
     }
     ,
     updateCourses :  (state,action)=>{ 

      axios.post(`/api/courses/update_course/${action.payload.id}`, action.payload.data )
     }
} ,
extraReducers: {

  [GetCourses.pending] :  (state)=>{
       state=[];
       
    },
    [GetCourses.fulfilled]:(state, { payload })=>{
      
      return payload
      
    },
    [GetCourses.rejected]:(state)=>{
      state=[];
    }
}

})

export const {deleteCourse , addCourses  , updateCourses} = arryCoursesSlice.actions
export default arryCoursesSlice.reducer


