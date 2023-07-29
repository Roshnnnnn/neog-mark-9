import "./App.css";
import { useState } from "react";

const movies = {
	SciFi: ["Interstellar", "The Matrix", "Inception"],
	Action: ["Batman", "Avengers", "Justice League"],
	Horror: ["The Conjuring", "The Shining", "Psycho"],
};

const MoviesData = Object.keys(movies);

export default function App() {
	const [movie, setMovie] = useState([]);

	const clickHadle = (e) => {
		var selectedGenres = e.target.textContent;
		var selectedMoviesList = movies[selectedGenres];

		console.log(selectedMoviesList);

		setMovie(selectedMoviesList);
	};
	return (
		<div className="App">
			<h1>Best Movies</h1>
			<div>Checkout my favorite movies. Select a genre to get started</div>
			{MoviesData.map((item, index) => (
				<button onClick={clickHadle} key={index} style={{ margin: "1rem" }}>
					{item}
				</button>
			))}
			<hr />
			<ul>
				{movie.map((item, index) => (
					<li style={{ listStyle: "none" }} key={index}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}
