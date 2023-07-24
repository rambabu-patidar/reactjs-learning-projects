import React, { useContext, useState, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);
	const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);

	const { items } = cartCtx;
	const numberOfCartItems = items.reduce((sum, item) => sum + item.amount, 0);

	useEffect(() => {
		if (items.length === 0) {
			return;
		}

		setIsBtnHighlighted(true);

		const timerId = setTimeout(() => {
			setIsBtnHighlighted(false);
		}, 300);

		return () => {
			clearTimeout(timerId);
		};
	}, [items]);

	const classes = `${styles.button} ${isBtnHighlighted ? styles.bump : ""}`;

	return (
		<button className={classes} onClick={props.onClick}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
