import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("isLoggedInInfo" === "1")) {
			setIsLoggedIn(true);
		}
	}, []);

	const loginHandler = () => {
		localStorage.setItem("isLoggedInInfo", 1);
		setIsLoggedIn(true);
	};

	const logoutHandler = () => {
		localStorage.removeItem("isLoggedInInfo");
		setIsLoggedIn(false);
	};
	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogin: loginHandler,
				onLogout: logoutHandler,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
