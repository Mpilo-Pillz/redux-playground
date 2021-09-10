import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const initialAuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})

// create store takes in a reducer
// const store = configureStore({
//     reducer: counterSlice.reducer
// });
// reducer: {counter: counterSlice.reducer} alternative

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
});
export default store;