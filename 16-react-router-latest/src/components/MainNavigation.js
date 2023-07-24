import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
	return (
		<header className={styles.header}>
			<nav>
				<ul className={styles.list}>
					<li>
						<NavLink
							to=""
							className={({ isActive }) =>
								isActive ? styles.active : undefined
							}
						>
							Home Page
						</NavLink>
					</li>
					<li>
						<NavLink
							to="products"
							className={({ isActive }) =>
								isActive ? styles.active : undefined
							}
						>
							Products Page
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
