import { initStore } from "./store";

const configureStore = () => {
	const actions = {
		TOGGLE_FAV: (currState, productId) => {
			// finding the index of clicked product
			const prodIndex = currState.products.findIndex((p) => p.id === productId);
			// inverting the status of clicked product
			const newFavStatus = !currState.products[prodIndex].isFavorite;
			// copying all the previous product into new array
			const updatedProducts = [...currState.products];
			// modifing the clicked product in the new array.
			updatedProducts[prodIndex] = {
				...currState.products[prodIndex],
				isFavorite: newFavStatus,
			};

			return { products: updatedProducts };
		},
	};

	initStore(actions, {
		products: [
			{
				id: "p1",
				title: "Red Scarf",
				description: "A pretty red scarf.",
				isFavorite: false,
			},
			{
				id: "p2",
				title: "Blue T-Shirt",
				description: "A pretty blue t-shirt.",
				isFavorite: false,
			},
			{
				id: "p3",
				title: "Green Trousers",
				description: "A pair of lightly green trousers.",
				isFavorite: false,
			},
			{
				id: "p4",
				title: "Orange Hat",
				description: "Street style! An orange hat.",
				isFavorite: false,
			},
		],
	});
};

export default configureStore;
