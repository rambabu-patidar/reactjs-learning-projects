import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";
import TimerPage from "./pages/Timer";

// const routeDefinitations = createRoutesFromElements(
// 	<Route>
// 		<Route path="/" element={<HomePage />}></Route>
// 		<Route path="/products" element={<ProductsPage />}></Route>
// 	</Route>
// );

// const router = createBrowserRouter(routeDefinitations);

// There are two types of Path absolute(starts with "/") and relative (not start with "/")

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			// { path: "", element: <HomePage /> }, // same as below
			{ index: true, element: <HomePage /> },
			{ path: "products", element: <ProductsPage /> },
			{ path: "products/:productId", element: <ProductDetailPage /> },
		],
	},
	{
		path: "/timer",
		element: <TimerPage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
