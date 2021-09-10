import { useDispatch, useSelector } from 'react-redux'; // manage a part of our state managed by the store
// import { useStore } from 'react-redux'; // utap directly into our store
import classes from './Counter.module.css';
import { counterActions } from '../store';

const Counter = () => {
  //select which data we want to select from store
  // const counter = useSelector(state => state.counter);
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter)
  // const show = useSelector(state => state.showCounter)
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    // dispatch({ type: 'toggle' })
    dispatch(counterActions.toggleCounter())
  };

  const incrementHandler = () => {
    // dispatch({ type: 'increment', amount: 5 })

    dispatch(counterActions.increment())
  };

  const increaseHandler = () => {
    // dispatch({ type: 'increase', amount: 5 })
    // reducer: {counter: counterSlice.reducer}
    dispatch(counterActions.increase(5)) // automatically creates a payload property for 10
  };

  const decrementHandler = () => {
    // dispatch({ type: 'decrement' })
    dispatch(counterActions.decrement())
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Functional Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
