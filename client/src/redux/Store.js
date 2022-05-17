import {configureStore } from '@reduxjs/toolkit';

import arryCoursesSlice from './reducerCourses'
import requestsSlice from './reducerRequests'
import userSlice from './reducerUser'
import loginSlice from './reducerLogin'
 const store = configureStore({
    reducer: {
      courses : arryCoursesSlice ,
      requests : requestsSlice ,
      users : userSlice , 
      login: loginSlice  
    },
  })
  export  default store