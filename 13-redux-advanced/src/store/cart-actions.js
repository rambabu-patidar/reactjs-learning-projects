/* Custom action creators */

import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
	return async (dispatch) => {
		dispatch(
			uiActions.showNotificaton({
				status: "fetching",
				title: "Fetching..",
				message: "Fetching cart data.",
			})
		);

		const sendRequest = async () => {
			const response = await fetch(
				"https://react-http-fc34a-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
			);

			if (!response.ok) {
				throw new Error("Fetching cart failed!");
			}

			const responseData = await response.json();
			return responseData;
		};

		try {
			const data = await sendRequest();
			dispatch(
				cartActions.replaceCart({
					items: data.items || [],
					totalQuantity: data.totalQuantity,
				})
			);

			dispatch(
				uiActions.showNotificaton({
					status: "success",
					title: "Fetched!",
					message: "Fetched cart data successfully!",
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotificaton({
					status: "error",
					title: "Error!",
					message: "Fetched cart data failed!",
				})
			);
		}
	};
};

export const sendCartData = (cart) => {
	return async (dispatch) => {
		dispatch(
			uiActions.showNotificaton({
				status: "pending",
				title: "Sending..",
				message: "Sending cart data.",
			})
		);

		const sendRequest = async () => {
			const response = await fetch(
				"https://react-http-fc34a-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
				{
					method: "PUT",
					body: JSON.stringify({
						items: cart.items,
						totalQuantity: cart.totalQuantity,
					}),
				}
			);

			if (!response.ok) {
				throw new Error("Sending cart data failed");
			}
		};

		try {
			await sendRequest();

			dispatch(
				uiActions.showNotificaton({
					status: "success",
					title: "Success!",
					message: "Sent cart data successfully!",
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotificaton({
					status: "error",
					title: "Error!",
					message: "Sending cart data failed!",
				})
			);
		}
	};
};
