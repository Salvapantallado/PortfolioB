import React from "react";
import "../styles/FollowMe.css";

export default function FollowMe() {
	return (
		<div className="followup">
			<ul>
				<li>
					<a
						className="github"
						target="_blank"
						rel="noreferrer noopener"
						href="https://github.com/Salvapantallado"
						title="Find me on GitHub"
					>
						<span>Find me on GitHub</span>
					</a>
				</li>
				<li>
					<a
						className="linkedin"
						target="_blank"
						rel="noreferrer noopener"
						href="https://www.linkedin.com/in/lighuen-miranda/"
						title="Find me on LinkedIn"
					>
						<span>Find me on LinkedIn</span>
					</a>
				</li>
				<li>
					<a
						className="whatsapp"
						target="_blank"
						rel="noreferrer noopener"
						href="https://walink.co/156dba"
						title="Find me on WhatsApp"
					>
						<span>Find me on WhatsApp</span>
					</a>
				</li>
			</ul>
		</div>
	);
}
