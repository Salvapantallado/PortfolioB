import React from "react";
import Typewriter from "typewriter-effect";
import "../styles/Type.css";

export default function Type() {
	return (
		<Typewriter
			className="type"
			options={{
				strings: [
					" Frontend Developer",
					" Fullstack Developer",
					" Debugging Fan",
					" Passionate Coder",
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
	);
}
