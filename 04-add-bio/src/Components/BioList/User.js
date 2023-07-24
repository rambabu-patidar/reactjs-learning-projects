import React from "react";
import styles from "./User.module.css";
const User = (props) => {
	return (
		<li className={styles["user-list-item"]}>
			{props.userInfo.name} ({props.userInfo.age} years old)
		</li>
	);
};

export default User;
