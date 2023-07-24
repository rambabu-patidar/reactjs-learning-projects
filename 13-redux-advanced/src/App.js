import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData, fetchCartData } from "./store/cart-actions";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const showCart = useSelector((state) => state.ui.cartIsVisible);
	const notification = useSelector((state) => state.ui.notification);

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			dispatch(fetchCartData());
			return;
		}
		if (cart.changed) {
			dispatch(sendCartData(cart));
		}
	}, [cart, dispatch]);

	/*
	// If we wanna use another method so that we don't need to create custom creator funcitons.
	useEffect(() => {
		const sendCartData = async () => {
			dispatch(
				uiActions.showNotificaton({
					status: "pending",
					title: "Sending..",
					message: "Sending cart data.",
				})
			);

			const response = await fetch(
				"https://react-http-fc34a-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
				{
					method: "PUT",
					body: JSON.stringify(cart),
				}
			);

			if (!response.ok) {
				throw new Error("Sending cart data failed");
			}

			dispatch(
				uiActions.showNotificaton({
					status: "success",
					title: "Success!",
					message: "Sent cart data successfully!",
				})
			);
		};

		if (isInitial) {
			isInitial = false;
			return;
		}
		sendCartData().catch((error) => {
			dispatch(
				uiActions.showNotificaton({
					status: "error",
					title: "Error!",
					message: "Sending cart data failed!",
				})
			);
		});
	}, [cart, dispatch]); */

	return (
		<Fragment>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
			<Layout>
				{showCart && <Cart />}
				<Products />
			</Layout>
		</Fragment>
	);
}

export default App;
