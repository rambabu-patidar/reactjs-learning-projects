import React from "react";
import { Link } from "react-router-dom";

// this is a dummy data but we may have that product are coming from some backend

const PRODUCTS = [
	{ id: "p1", title: "Product 1" },
	{ id: "p2", title: "Product 2" },
	{ id: "p3", title: "Product 3" },
];

const ProductsPage = () => {
	return (
		<div>
			<h1>My Products Page</h1>
			<ul>
				{PRODUCTS.map((prod) => (
					<li key={prod.id}>
						<Link to={prod.id}>{prod.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ProductsPage;
