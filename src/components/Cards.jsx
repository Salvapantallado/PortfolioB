import React from "react";
import { resumeData } from "../resumeData";


export default function Cards() {
    return(
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
    )
}