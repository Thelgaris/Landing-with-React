import React from "react";
import Navbar from "./Navbar";
import Carrousel from "./Carrousel";
//include images into your bundle

//create your first component
function Home() {
	return <div>{Navbar}</div>&
	<div>{Carrousel}</div>;
}

export default Home;
