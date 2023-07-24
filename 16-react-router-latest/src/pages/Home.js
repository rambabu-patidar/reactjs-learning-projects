import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
	const navigate = useNavigate();

	const navigateHandler = () => {
		navigate("/products");
	};

	// useEffect(() => {
	// 	const timeoutId = setTimeout(() => {
	// 		navigate("/timer");
	// 	}, 1000);

	// 	return () => clearTimeout(timeoutId);
	// }, [navigate]);

	return (
		<div>
			<h1>My Home Page</h1>
			<p>
				Go to the <Link to="/products">list of products</Link>.
			</p>
			<button onClick={navigateHandler}>Navigate</button>
		</div>
	);
}
