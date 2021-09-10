import { createSlice, configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter-slice';
import authReducer from './auth-slice'





// create store takes in a reducer
// const store = configureStore({
//     reducer: counterSlice.reducer
// });
// reducer: {counter: counterSlice.reducer} alternative




const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authReducer }
});
export default store;