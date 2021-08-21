import React from "react";
import createLeagueImage from "../../assets/img/REPLACETHISIMAGE.jpg";
import { Link } from "react-router-dom";

function LeagueCreateButton(props) {
	return (
		<Link to="/leagues/create" href="#" className="card bg-dark text-white my-3">
			<img src={createLeagueImage} className="card-img" alt="..." />
			<div className="card-img-overlay">
				<h2 className="card-title my-5 py-5" style={{ top: "45%" }}>
					Click Here To Create Your Own League</h2>
			</div>
		</Link>
	)
}

export default LeagueCreateButton;