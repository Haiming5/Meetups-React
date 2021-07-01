import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FavoriteContextProvider } from "./store/StoredFavorites";

// ReactDom an object created by the React team
// <App /> is called JSX (html in javascript)
// We want to render the App which defined in App.js to the index.html in public folder, where id is "root"
ReactDOM.render(
	<FavoriteContextProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</FavoriteContextProvider>,
	document.getElementById("root")
);
