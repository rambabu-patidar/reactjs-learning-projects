import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

import styles from "./Counter.module.css";

const Counter = () => {
	/*useSelector automatically set subscription of this component when we use it.
	 when the data in store changes it automatically execute this component.
	 mainly this is used to extract the store's state values.
	 we are using object destructuring here. 
	 */
	const { counter, showCounter } = useSelector((state) => {
		return {
			counter: state.counter.counter,
			showCounter: state.counter.showCounter,
		};
	});
	/* const counter = useSelector((state) => state.counter);
 	 const showCounter = useSelector((state) => state.showCounter); */

	const dispatch = useDispatch();

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};

	const increaseHandler = () => {
		dispatch(counterActions.increase({ amount: 5 }));
	};

	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
	};

	return (
		<main className={styles.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={styles.value}>{counter}</div>}
			<button onClick={incrementHandler}>Increment</button>
			<button onClick={increaseHandler}>Increase by 5</button>
			<button onClick={decrementHandler}>Decrement</button>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;

// class base component equivalent of above

/* class Counter extends Component {
	incrementHandler() {
		this.props.increment();
	}

	decrementHandler() {
		this.props.decrement();
	}

	toggleCounterHandler() {}

	render() {
		return (
			<main className={styles.counter}>
				<h1>Redux Counter</h1>
				<div className={styles.value}>{this.props.counter}</div>
				<button onClick={this.incrementHandler.bind(this)}>Increment</button>
				<button onClick={this.decrementHandler.bind(this)}>Decrement</button>
				<button onClick={this.toggleCounterHandler}>Toggle Counter</button>
			</main>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		counter: state.counter,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => dispatch({ type: "INCREMENT" }),
		decrement: () => dispatch({ type: "DECREMENT" }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter); */
