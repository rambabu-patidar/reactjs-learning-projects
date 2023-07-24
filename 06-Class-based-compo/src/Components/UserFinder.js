import { Fragment, Component } from "react";
import Users from "./Users";
import UsersContext from "../store/users-context";
import ErrorBoundary from "../ErrorHandling/ErrorBoundary";
import classes from "./UserFinder.module.css";

class UserFinder extends Component {
	constructor(props) {
		// First call to this method
		super();
		this.state = {
			searchTerm: "",
			filteredUsers: [],
		};
	}

	static contextType = UsersContext;

	componentDidMount() {
		// Third call to this method
		// when this component loaded for first time
		setTimeout(() => {
			this.setState({ filteredUsers: this.context.users });
		}, 1000);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchTerm !== this.state.searchTerm) {
			this.setState({
				filteredUsers: this.context.users.filter((user) =>
					user.name.includes(this.state.searchTerm)
				),
			});
		}
	}

	searchChangeHandler(event) {
		this.setState({ searchTerm: event.target.value });
	}

	render() {
		// Second call to this method
		return (
			<Fragment>
				<div className={classes.finder}>
					<input type="search" onChange={this.searchChangeHandler.bind(this)} />
				</div>
				<ErrorBoundary>
					<Users users={this.state.filteredUsers} />
				</ErrorBoundary>
			</Fragment>
		);
	}
}

// const UserFinder = () => {
// 	const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
// 	const [searchTerm, setSearchTerm] = useState("");

// 	useEffect(() => {
// 		console.log("useEffect Ran");
// 		setFilteredUsers(
// 			DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
// 		);
// 		return () => {
// 			console.log("CLEANUP Called");
// 		};
// 	}, [searchTerm]);

// 	const searchChangeHandler = (event) => {
// 		setSearchTerm(event.target.value);
// 	};

// 	return (
// 		<Fragment>
// 			<div className={classes.finder}>
// 				<input type="search" onChange={searchChangeHandler} />
// 			</div>
// 			<Users users={filteredUsers} />
// 		</Fragment>
// 	);
// };

export default UserFinder;
