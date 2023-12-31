import { useState } from "react";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import CommentsList from "./CommentsList";

const DUMMY_COMMENTS = [
	{ id: "c1", text: "Wow! what a quote!" },
	{ id: "c2", text: "I like your way of explaining things." },
	{ id: "c3", text: "You'r awesome." },
];

const Comments = () => {
	const [isAddingComment, setIsAddingComment] = useState(false);

	const startAddCommentHandler = () => {
		setIsAddingComment(true);
	};

	return (
		<section className={classes.comments}>
			<h2>User Comments</h2>
			{!isAddingComment && (
				<button className="btn" onClick={startAddCommentHandler}>
					Add a Comment
				</button>
			)}
			{isAddingComment && <NewCommentForm />}

			<CommentsList comments={DUMMY_COMMENTS} />
		</section>
	);
};

export default Comments;
