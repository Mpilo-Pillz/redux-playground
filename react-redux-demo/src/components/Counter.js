import { useDispatch, useSelector } from 'react-redux'; // manage a part of our state managed by the store
// import { useStore } from 'react-redux'; // utap directly into our store
import classes from './Counter.module.css';

const Counter = () => {
  //select which data we want to select from store
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => { };

  const incrementHandler = () => {
    dispatch({ type: 'increment', amount: 5 })
  };

  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 5 })
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' })
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Functional Counter</h1>
      <div className={classes.value}>{counter}</div>
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
