import React from "react";
import defaultLeague from "../../assets/img/default-league.png";

export default function League({ logo, name }) {
	console.log(name);
	return (
		<React.Fragment>
			<img
				className="parallax-league-img"
				src={logo ? logo : defaultLeague}
				alt="This is the logo for the league"
			/>
			<h1 className="parallax-title">{name}</h1>
		</React.Fragment>
	);
}
