import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../features/user/userSlice'; // Correct import path

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
