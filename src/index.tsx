/* @refresh reload */
import "./index.css";
import { Router } from "@solidjs/router";
import { render } from "solid-js/web";
import App from "./routes/App";
import { router } from "./routes/routeconfig";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error(
		"Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
	);
}

render(
	() => <Router root={App}>{router}</Router>,
	document.getElementById("root"),
);
