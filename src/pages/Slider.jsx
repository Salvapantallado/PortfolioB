import React, { useState } from "react";
import "../styles/Slider.css";
import "../styles/AwesomerSlider.css";
import "../styles/CubeAnimation.css";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

import AwesomeSlider from "react-awesome-slider";

export default function PageSlider() {
	const [pageNumber, setPageNumber] = useState(0);

	function handleChange(newPageNumber) {
		setPageNumber(newPageNumber);
	}

	return (
		<div>
			<AwesomeSlider
				animation="cubeAnimation"
				fillParent={true}
				bullets={false}
				infinite={false}
				mobileTouch={false}
				selected={pageNumber}
			>
				<div>
					<Home pageNumber={pageNumber} onChange={handleChange} />
				</div>
				<div>
					<About pageNumber={pageNumber} onChange={handleChange} />
				</div>
				<div>
					<Projects pageNumber={pageNumber} onChange={handleChange} />
				</div>
			</AwesomeSlider>
		</div>
	);
}
