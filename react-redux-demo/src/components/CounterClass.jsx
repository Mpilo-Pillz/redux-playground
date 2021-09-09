import { Component } from "react";
import { connect } from "react-redux";
import classes from './Counter.module.css';

class CounterClass extends Component {
    incrementHandler() {
        this.props.increment()
    }
    decrementHandler() {
        this.props.decrement()
    }
    toggleCounterHandler() {

    }
    render() {
        return (
            <main className={classes.counter}>
      <h1>Redux Class Counter</h1>
      <div className={classes.value}>{this.props.counter}</div> 
      <div>
        <button onClick={this.incrementHandler.bind(this)}>Increment</button>
        <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
      </div>
      <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
    </main>
        )
            
        
}
}

// equivalent to useSelector
const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

// equivalent to useDispatch
const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({type: 'increment'}),
        decrement: () => dispatch({ type: 'decrement' })
    }
} 
//connect is a higher order component
//exectute the connect function which returnts a new function which we inturn execute passing counter to the returned function
export default connect(mapStateToProps, mapDispatchToProps)(CounterClass) 
// passin the function pointer do not execute redux will do that fo us