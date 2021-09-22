import React, { useState } from "react";

//create your first component
const TrafficLight = () => {
	const [redlightOn, setRedligthOn] = useState(false);
	const [yellowlightOn, setYellowligthOn] = useState(false);
	const [greenlightOn, setGreenligthOn] = useState(false);

	let redclass = "red-light bg-danger mt-3";
	let yellowclass = "yellow-light bg-warning";
	let greenclass = "green-light bg-success";

	const turnRedLightOn = () => {
		setRedligthOn(true);
		setYellowligthOn(false);
		setGreenligthOn(false);
	};

	const turnYellowLightOn = () => {
		setRedligthOn(false);
		setYellowligthOn(true);
		setGreenligthOn(false);
	};

	const turnGreenLightOn = () => {
		setRedligthOn(false);
		setYellowligthOn(false);
		setGreenligthOn(true);
	};

	return (
		<div className="cuerpo">
			<div className="bg-dark palo mx-auto row"></div>
			<div className="container bg-dark row">
				<button
					className={redlightOn ? redclass + " selected" : redclass}
					onClick={turnRedLightOn}></button>
				<button
					className={
						yellowlightOn ? yellowclass + " selected" : yellowclass
					}
					onClick={turnYellowLightOn}></button>
				<button
					className={
						greenlightOn ? greenclass + " selected" : greenclass
					}
					onClick={turnGreenLightOn}></button>
			</div>
		</div>
	);
};

export default TrafficLight;
