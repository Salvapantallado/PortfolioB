import React from "react";
import "../styles/Navbar.css";

export default function Navbar(props) {
	return (
		<nav className="navbar">
			<button onClick={() => props.onChange(0)}>Home</button>

			<button onClick={() => props.onChange(1)}>About</button>

			<button onClick={() => props.onChange(2)}>Projects</button>
		</nav>
	);
}
