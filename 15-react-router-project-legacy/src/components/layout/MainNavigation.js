import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>Great Quotes</div>
			<nav className={styles.nav}>
				<ul>
					<li>
						<NavLink
							to="quotes"
							className={({ isActive, isPending }) =>
								isActive ? styles.active : isPending ? styles.pending : ""
							}
						>
							All Quotes
						</NavLink>
					</li>
					<li>
						<NavLink
							to="new-quote"
							className={({ isActive, isPending }) =>
								isActive ? styles.active : ""
							}
						>
							Add New Quote
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
