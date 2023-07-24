import React from "react";

// we provide the empty values here so that we get the autocompletion feature in the app later when we use it.
const CartContext = React.createContext({
	items: [],
	totalAmount: 0,
	addItem: (item) => {},
	removeItem: (id) => {},
	clearCart: () => {},
});

export default CartContext;
