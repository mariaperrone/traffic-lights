import React, { useState } from "react";

//create your first component
const TrafficLight = () => {
	const [redlightOn, setRedligthOn] = useState(false);
	const [yellowlightOn, setYellowligthOn] = useState(false);
	const [greenlightOn, setGreenligthOn] = useState(false);
	let redclass = "red-light bg-danger mt-3";
	let yellowclass = "yellow-light bg-warning";
	let greenclass = "green-light bg-success";

	if (redlightOn == true) {
		redclass += " selected";
		yellowclass = "yellow-light bg-warning";
		greenclass = "green-light bg-success";
	}

	if (yellowlightOn == true) {
		redclass = "red-light bg-danger mt-3";
		yellowclass += " selected";
		greenclass = "green-light bg-success";
	}

	if (greenlightOn == true) {
		redclass = "red-light bg-danger mt-3";
		yellowclass = "yellow-light bg-warning";
		greenclass += " selected";
	}
	return (
		<div className="cuerpo d-flex justify-content-center align-items-center">
			<div className="container bg-dark justify-content-center">
				<button
					className={redclass}
					onClick={() => setRedligthOn(true)}></button>
				<button
					className={yellowclass}
					onClick={() => setYellowligthOn(true)}></button>
				<button
					className={greenclass}
					onClick={() => setGreenligthOn(true)}></button>
			</div>
		</div>
	);
};

export default TrafficLight;
