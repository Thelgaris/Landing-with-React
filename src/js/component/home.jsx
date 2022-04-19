import React from "react";
import Navbar from "./Navbar.jsx";
import Carrousel from "./Carrousel.jsx";

import Card from "./card.jsx";
import Foot from "./foot.jsx";

const Home = () => {
	return (
		<div className="container">
			<div className="row" id="cards">
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
