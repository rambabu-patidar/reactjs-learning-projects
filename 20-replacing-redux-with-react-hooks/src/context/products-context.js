import React, { createContext, useState } from "react";

export const ProductsContext = createContext({
	products: [],
	toggleFav: (id) => {},
});

const ProductsProvider = (props) => {
	const [productsList, setProductsList] = useState([
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
	]);

	const setFavourite = (productId) => {
		setProductsList((currProducts) => {
			// finding the index of clicked product
			const prodIndex = currProducts.findIndex((p) => p.id === productId);
			// inverting the status of clicked product
			const newFavStatus = !currProducts[prodIndex].isFavorite;
			// copying all the previous product into new array
			const updatedProducts = [...currProducts];
			// modifing the clicked product in the new array.
			updatedProducts[prodIndex] = {
				...currProducts[prodIndex],
				isFavorite: newFavStatus,
			};
			return updatedProducts;
		});
	};

	return (
		<ProductsContext.Provider
			value={{ products: productsList, toggleFav: setFavourite }}
		>
			{props.children}
		</ProductsContext.Provider>
	);
};

export default ProductsProvider;
