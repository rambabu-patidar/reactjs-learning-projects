import React, { useContext, Fragment } from "react";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AuthContext from "./store/auth-context";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
	const authCtx = useContext(AuthContext);
	return (
		<Fragment>
			<MainHeader />
			<main>
				{!authCtx.isLoggedIn && <Login />}
				{authCtx.isLoggedIn && <Home />}
			</main>
		</Fragment>
	);
}

export default App;
