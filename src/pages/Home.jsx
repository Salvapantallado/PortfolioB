import React from "react";
import "../styles/Home.css";
import Type from "../components/Typewriter";
import FollowMe from "../components/FollowMe";
import Navbar from "../components/Navbar";

export default function Home(props) {
	return (
		<div>
			<Navbar pageNumber={props.pageNumber} onChange={props.onChange}/>
			<FollowMe />
			<div id="Home" className="home-container">
				<div className="card-wrapper">
					<div className="presentation">
						<h1>
							<strong>Welcome</strong>
						</h1>
						<h2> to my portfolio!</h2>
						<br />
						<div>
							<div className="type-container">
								<h3>I'm a</h3>
								<Type />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
