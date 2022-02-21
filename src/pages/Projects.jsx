import React from "react";
import "../styles/Projects.css";
import { resumeData } from "../resumeData";
import FollowMe from "../components/FollowMe";
import Navbar from "../components/Navbar";

export default function Projects(props) {
	return (
		<div>
			<Navbar pageNumber={props.pageNumber} onChange={props.onChange} />
			<FollowMe />
			<div id="portfolio" className="projects-container">
				<div className="projects-wrapper">
					<h1>My Projects:</h1>
					<div className="grid-container">
						{resumeData.projects.map((project) => (
							<div className="grid-card" key={project.title}>
								<img src={project.image} alt="mappedimage" />
								<h2>{project.title}</h2>
								<h3>
									{project.caption} - {project.tag}
								</h3>
								<h4>{project.description}</h4>
								<div className="links-container">
									{project.links.map((x, index) => (
										<div key={index} className="links">
											<a
												href={x.link}
												rel="noopener noreferrer"
												target="_blank"
											>
												{x.icon} <span> {x.tag}</span>
											</a>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
