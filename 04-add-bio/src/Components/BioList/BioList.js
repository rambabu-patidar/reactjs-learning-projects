import React from "react";
import Card from "../UI/Card/Card";
import User from "./User";
import styles from "./BioList.module.css";

const BioList = (props) => {
	let content;
	if (props.items.length === 0) {
		content = <p>No users Enter one!</p>;
	} else {
		content = props.items.map((item) => <User userInfo={item} key={item.id} />);
	}

	return (
		<Card>
			<ul className={styles["user-list"]}>{content}</ul>
		</Card>
	);
};

export default BioList;
