import React, { Component } from "react";

class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = {
			hasError: false,
		};
	}

	componentDidCatch(error) {
		console.log(error);
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return (
				<h3
					style={{
						textAlign: "center",
						color: "red",
						padding: "1rem",
						backgroundColor: "black",
					}}
				>
					Something bad ocurred!!
				</h3>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
