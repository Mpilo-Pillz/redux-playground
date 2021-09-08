import { useSelector } from 'react-redux'; // manage a part of our state managed by the store
// import { useStore } from 'react-redux'; // utap directly into our store
import classes from './Counter.module.css';

const Counter = () => {
  //select which data we want to select from store
  const counter = useSelector(state => state.counter);
  const toggleCounterHandler = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
