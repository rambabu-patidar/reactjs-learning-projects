// we are running this file in Node.js environment so we have to import redux in this
// way using require() function.
const redux = require("redux");

// This is a reducer function which will be used to manipulate the data of store.
// using the action we get.
// this should be pure function i.e. it doesn't have side effect indside it and should take input and procude the same output.
function counterReducer(state = { counter: 0 }, action) {
	if (action.type === "INCREMENT") {
		return {
			counter: state.counter + 1,
		};
	}

	if (action.type === "DECREMENT") {
		return {
			counter: state.counter - 1,
		};
	}

	return state;
}

// This line is creating a store where our data is stored.
// since the createStore() method is deprecated(we can use it still) so we use the legacy_createStore() which
// is excatly the same so that we don't get overline. Try uncomment the next line;
// const store = redux.createStore(counterReducer);
const store = redux.legacy_createStore(counterReducer);

// activity we want to do when the redux will notify us about the changes
// happened in store.
function counterSubscriber() {
	const latestState = store.getState();
	console.log(latestState);
}
// This is setting subscription of counterSubscriber to the store so any changes made in the store
// will be catched and this subscriber will be called by redux automatically
store.subscribe(counterSubscriber);

// dispatching the actions to do some change
// as we directly can't change the store data, we have to dispatch the actions which the reducer will
// manage and change the data accordingly.
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

// This is the redux in nutshell it is not specific to only react here.
// In general redux work like this.

// Run the above file in Node.js using:
// Node redux-demo.js <- command.
