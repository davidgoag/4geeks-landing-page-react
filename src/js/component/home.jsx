import React from "react";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js"; //./component/home.jsx

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbotron />
			<div className="row">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<div className="row">
				<Footer />
			</div>
		</div>
	);
};

export default Home;
