import React, { Component } from "react";
import { Transition } from "react-transition-group";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
	state = {
		isModalOpen: false,
		showBlock: false,
	};

	onOpenModalHandler = () => this.setState({ isModalOpen: true });

	onCloseModalHandler = () => this.setState({ isModalOpen: false });

	render() {
		return (
			<div className="App">
				<h1>React Animations</h1>

				{/* --comment-- */}

				<button
					className="Button"
					onClick={() =>
						this.setState((prevState) => ({
							showBlock: !prevState.showBlock,
						}))
					}
				>
					Toggle
				</button>
				<Transition
					in={this.state.showBlock}
					timeout={1000}
					mountOnEnter
					unmountOnExit
					onEnter={() => console.log("onEnter")}
					onEntering={() => console.log("onEntering")}
					onEntered={() => console.log("onEntered")}
					onExit={() => console.log("onExit")}
					onExiting={() => console.log("onExiting")}
					onExited={() => console.log("onExited")}
				>
					{(state) => (
						<div
							style={{
								backgroundColor: "red",
								width: "100px",
								height: "100px",
								margin: "auto",
								transition: "opacity 1000ms linear",
								opacity: state === "exiting" ? 0 : 1,
							}}
						></div>
					)}
				</Transition>

				<Modal
					closed={this.onCloseModalHandler}
					show={this.state.isModalOpen}
				/>
				<Backdrop show={this.state.isModalOpen} />
				<button className="Button" onClick={this.onOpenModalHandler}>
					Open Modal
				</button>
				<h3>Animating Lists</h3>
				<List />
			</div>
		);
	}
}

export default App;

/* // since by showing Modal on the basis of opacity and with pure css we
				have one problem 
        // the the modal and backdrop components always remain
				in the dom wether they are // visible or not. // so to solve this
				problem we might have used the trick to render the modal and backdrop
				conditionally // but doing so works for the "in" animation but for out
				animation it doesn't works // that why we now have to think other way.
				Here come third party modules. */

/* {this.state.isModalOpen ? (
					<>
						<Modal
							closed={this.onCloseModalHandler}
							show={this.state.isModalOpen}
						/>
						<Backdrop show={this.state.isModalOpen} />
					</>
				) : null} */
