import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
	const params = useParams();

	return (
		<>
			<h1>The Product Detail Page.</h1>
			<p>{params.productId}</p>
			<Link to=".." relative="path">
				Back
			</Link>
		</>
	);
};

export default ProductDetailPage;
