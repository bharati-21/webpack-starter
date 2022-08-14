import "./App.css";
import loader from "./loader.svg";
import React, { useState } from "react";

function App() {
	const [Confetti, setConfetti] = useState(null);

	function loadReactConfetti() {
		import("react-confetti")
			.then((module) => {
				setConfetti(module.default);
				console.log("Importing confetti...");

				setTimeout(() => {
					setConfetti(null);
				}, 8000);
			})
			.catch(() => console.log("Failed to import react-confetti"));
	}
	return (
		<div className="App">
			<h1>Hello World!</h1>
			<h2>Webpack React App</h2>
			<img src={loader} alt="Loading Gear" className="loader-gear" />
			<button onClick={loadReactConfetti} className="btn">
				Import react-confetti
			</button>
			{Confetti ? <Confetti /> : null}
		</div>
	);
}

export default App;
