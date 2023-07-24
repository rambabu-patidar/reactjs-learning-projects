import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import Card from "../UI/Card";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";

const Cart = (props) => {
	const cartItems = useSelector((state) => state.cart.items);
	const dispatch = useDispatch();

	const closeCartHandler = () => {
		dispatch(uiActions.toggle());
	};

	return (
		<Card className={styles.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>
				{cartItems.map((item) => (
					<CartItem
						key={item.id}
						item={{
							id: item.id,
							title: item.name,
							quantity: item.quantity,
							total: item.totalPrice,
							price: item.price,
						}}
					/>
				))}
			</ul>
			<button
				className={styles["close-button"]}
				type="button"
				onClick={closeCartHandler}
			>
				Close
			</button>
		</Card>
	);
};

export default Cart;
