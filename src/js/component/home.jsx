import React from "react";

import card from "./card.jsx";
import footer from "./foot.jsx";

const Home = () => {
	return (
		<div className="container">
			<div className="row">
				<card />
				<card />
				<card />
				<card />
			</div>
			<foot />
		</div>
	);
};

export default Home;
