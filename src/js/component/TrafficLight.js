import React, { useState } from "react";
import Green from "./Green";
import Yellow from "./Yellow";
import Red from "./Red";

const TrafficLight = () => {
	const [color, setColor] = useState(null);
	return (
		<div className="centeredContainer">
			<div className="trafficContainer">
				<div className="lineTraffic"></div>
				<div className="bodyTraffic">
					<Green active={color === "green"} onClick={() => setColor("green")} />
					<Yellow active={color === "yellow"} onClick={() => setColor("yellow")} />
					<Red active={color === "red"} onClick={() => setColor("red")} />
				</div>
			</div>
		</div>
	);
};

export default TrafficLight;

