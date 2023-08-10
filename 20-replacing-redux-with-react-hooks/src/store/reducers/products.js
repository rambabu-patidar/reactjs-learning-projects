import { TOGGLE_FAV } from "../actions/products";

const initialState = {
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
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_FAV:
			// finding the index of clicked product
			const prodIndex = state.products.findIndex(
				(p) => p.id === action.productId
			);
			// inverting the status of clicked product
			const newFavStatus = !state.products[prodIndex].isFavorite;
			// copying all the previous product into new array
			const updatedProducts = [...state.products];
			// modifing the clicked product in the new array.
			updatedProducts[prodIndex] = {
				...state.products[prodIndex],
				isFavorite: newFavStatus,
			};
			// creating a new object and returning it.
			return {
				...state,
				products: updatedProducts,
			};
		default:
			return state;
	}
};

export default productReducer;
