import React from "react";

import Card from "./card.jsx";
import Foot from "./foot.jsx";

const Home = () => {
	return (
		<div className="container">
			<div className="row">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Foot />
		</div>
	);
};

export default Home;
