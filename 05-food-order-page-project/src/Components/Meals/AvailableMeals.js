import React, { useEffect, useReducer } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import styles from "./AvailableMeals.module.css";

const initialState = {
	meals: [],
	isLoading: true,
	httpError: null,
};

const mealsReducer = (state, action) => {
	if (action.type === "SET") {
		return {
			meals: action.value,
			isLoading: state.isLoading,
			httpError: state.httpError,
		};
	}

	if (action.type === "LOADING") {
		return {
			isLoading: action.value,
			meals: state.meals,
			httpError: state.httpError,
		};
	}

	if (action.type === "ERROR") {
		return {
			httpError: action.value,
			meals: state.meals,
			isLoading: state.isLoading,
		};
	}
	return initialState;
};

const AvailableMeals = () => {
	const [mealsState, mealsStateDispatch] = useReducer(
		mealsReducer,
		initialState
	);

	// const [meals, setMeals] = useState([]);
	// const [isLoading, setIsLoading] = useState(true);
	// const [httpError, setHttpError] = useState(null);

	useEffect(() => {
		const fetchMeals = async () => {
			const response = await fetch(
				"https://react-http-fc34a-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
			);

			if (!response.ok) {
				throw new Error("Request failed!!");
			}

			const data = await response.json();
			let fetchedMeals = [];
			for (const key in data) {
				const mealObj = {
					id: key,
					name: data[key].name,
					description: data[key].description,
					price: +data[key].price,
				};
				fetchedMeals.push(mealObj);
			}
			mealsStateDispatch({ type: "SET", value: fetchedMeals });
			mealsStateDispatch({ type: "LOADING", value: false });
		};

		fetchMeals().catch((error) => {
			mealsStateDispatch({ type: "LOADING", value: false });
			mealsStateDispatch({ type: "ERROR", value: error.message });
		});
	}, []);

	if (mealsState.isLoading) {
		return (
			<section className={styles["meals-loading"]}>
				<p>Loading...</p>
			</section>
		);
	}

	if (mealsState.httpError) {
		return (
			<section className={styles["http-error"]}>
				<p>{mealsState.httpError}</p>
			</section>
		);
	}

	const mealsList = mealsState.meals.map((meal) => (
		<MealItem
			key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));

	return (
		<section className={styles.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
