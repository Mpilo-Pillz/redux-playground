import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true }
const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            ...initialState,
            counter: state.counter + 1
        }
    }

    if (action.type === 'increase') {
        return {
            ...initialState,
            counter: state.counter + action.amount
        }
    }

    if (action.type === 'decrement') {
        return {
            ...initialState,
            counter: state.counter - 1
        }
    }

    if (action.type === 'toggle') {
        return {
            ...initialState,
            showCounter: !state.showCounter
        }
    }

    return state;
}
// create store takes in a reducer
const store = createStore(counterReducer);

export default store;