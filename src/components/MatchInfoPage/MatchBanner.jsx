import React from "react";
import dota2 from "../../assets/img/games/dota/dota-bg.jpg";
import dontfeed from "../../assets/img/defaultMatchBanner.jpg";

export default function MatchBanner({ game }) {
	let banner;
	switch (game) {
		case "DOTA2":
			banner = dota2;
			break;
		default:
			banner = dontfeed;
			break;
	}
	return (
		<img
			className="game-banner"
			src={banner}
			alt={
				banner !== dontfeed
					? "This match was played in " + game
					: "This match has not been played yet"
			}
		/>
	);
}
