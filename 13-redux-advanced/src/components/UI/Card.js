import styles from "./Card.module.css";

const Card = (props) => {
	const cardStyles = `${styles.card} ${props.className ?? ""}`;

	return <section className={cardStyles}>{props.children}</section>;
};

export default Card;
