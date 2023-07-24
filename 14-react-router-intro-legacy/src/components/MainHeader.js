import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainHeader.module.css";

const MainHeader = () => {
	return (
		<header className={styles.header}>
			<nav>
				<ul>
					<li>
						<NavLink
							className={({ isActive }) => (isActive ? styles.active : "")}
							to="/welcome"
						>
							Welcome
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) => (isActive ? styles.active : "")}
							to="/products"
						>
							products
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainHeader;
