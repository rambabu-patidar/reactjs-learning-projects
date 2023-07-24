/* Redux store */
import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./counter";
import authSliceReducer from "./auth";

const store = configureStore({
	reducer: {
		counter: counterSliceReducer,
		auth: authSliceReducer,
	},
});

export default store;

/* 
if we just used react-redux then this is the way to do
import { legacy_createStore as createStore, combineReducers } from "redux";

const initialState = {counter: 0, showCounter: true};

const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case "INCREMENT": {
			return {
				...state,
				counter: state.counter + 1,
			};
		}
		case "INCREASE": {
			return {
				counter: state.counter + action.amount,
				showCounter: state.showCounter,
			};
		}
		case "DECREMENT": {
			return {
				counter: state.counter - 1,
				showCounter: state.showCounter,
			};
		}
		case "TOGGLE": {
			return {
				counter: state.counter,
				showCounter: !state.showCounter,
			};
		}
		default: {
			return state;
		}
	}
};

const store = createStore(counterReducer); 
export default store;

Now as we can manage different slice of reducers of different part of application 
like for authentication and counter separately.
Problem with createStore() is that how do we set multiple reducers in createStore 
solution to this problem in to use * combineReducers * present in redux.

but alternatively we can also use configureStore() which is given above.

*/
