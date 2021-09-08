const redux = require('redux');

//** reducer functions take 2 inputs old state plus dispatched actions */
// returns new state pure function no side effects - dont get stuff from local storage or send http request or fetch something from local storage
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
};
const store = redux.createStore(counterReducer); //point at the function dont execute the reducer will do that
// console.log(store.getState());
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber); //point at the function dont execute the reducer will do that

store.dispatch({ type: 'increment' }) // whatchout it will print 2 not one cos i return new state
store.dispatch({ type: 'decrement' })