import React, { useState, useEffect, useCallback } from "react";
import AddMovie from "./Components/AddMovie";
import MoviesList from "./Components/MoviesList";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const fetchMoviesHandler = useCallback(async () => {
		setIsLoading(true);
		try {
			const response = await fetch(
				"https://react-http-fc34a-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json"
			);
			if (!response.ok) {
				throw new Error("Something went wrong!!");
			}

			const data = await response.json();
			const loadedMovies = [];

			for (const key in data) {
				loadedMovies.push({
					id: key,
					title: data[key].title,
					releaseDate: data[key].releaseDate,
					openingText: data[key].openingText,
				});
			}
			setMovies(loadedMovies);
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	}, []);

	useEffect(() => {
		fetchMoviesHandler();
	}, [fetchMoviesHandler]);

	const addMovieHandler = async (movie) => {
		// can do error handling here also...

		try {
			const response = await fetch(
				"https://react-http-fc34a-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
				{
					method: "POST",
					body: JSON.stringify(movie),
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (!response.ok) {
				throw new Error("Something weng wrong!!");
			}

			const data = await response.json();
			console.log(data);
			fetchMoviesHandler();
		} catch (error) {
			setError(error.message);
		}
	};

	let content = <p>Found no movies.</p>;

	if (movies.length > 0) {
		content = <MoviesList movies={movies} />;
	}

	if (error) {
		content = <p>{error}</p>;
	}

	if (isLoading) {
		content = <p>Loading Movies...</p>;
	}

	return (
		<React.Fragment>
			<section>
				<AddMovie onAddMovie={addMovieHandler} />
			</section>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>{content}</section>
		</React.Fragment>
	);
}

export default App;

/* 
// This can be used as body for fetchMoviesHandler, both are same
fetch("https://swapi.dev/api/films/")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const transformedData = data.results.map((result) => {
					return {
						id: result.episode_id,
						title: result.title,
						releaseDate: result.release_date,
						openingText: result.opening_crawl,
					};
				});
				setMovies(transformedData);
			});
*/
