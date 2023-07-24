import React from "react";
import { Routes, Route } from "react-router-dom";

const Welcome = () => {
	return (
		<section>
			<h1>The Welcome Page</h1>
			<Routes>
				<Route
					path="new-user"
					element={<p>Hello New User What would you like to explore?</p>}
				></Route>
			</Routes>
		</section>
	);
};

export default Welcome;
