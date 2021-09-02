import React from "react";
import defaultLeague from "../../assets/img/default-league.png";

function LeagueLogo({ logo }) {
	return (
		<img className="league-page-logo pt-5" src={logo ?? defaultLeague}
			 alt="This is the logo for the league" />
	)
}

export default LeagueLogo;