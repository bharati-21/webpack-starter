import "./App.css";
import loader from "./loader.svg";
import React from "react";

function App() {
	return (
		<div className="App">
			<h1>Hello World!</h1>
			<h2>Webpack React App</h2>
			<img src={loader} alt="Loading Gear" className="loader-gear" />
		</div>
	);
}

export default App;
