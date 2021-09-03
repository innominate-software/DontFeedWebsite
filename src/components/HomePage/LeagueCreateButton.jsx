import React from "react";
import createLeagueImage from "../../assets/img/LeagueCreateImage.jpg";
import { Link } from "react-router-dom";

function LeagueCreateButton(props) {
	return (
		<Link to="/leagues/create" href="#" className="card bg-dark text-white my-3">
			<img src={createLeagueImage} className="card-img" alt="..." />
			<div className="card-img-overlay">
				<h1 className="card-title my-5 py-5 df-pink-text" style={{"WebkitTextStroke": "2px black" }}>
					Click Here To Create Your Own League</h1>
			</div>
		</Link>
	)
}

export default LeagueCreateButton;