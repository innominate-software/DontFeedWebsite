import React from "react";
import dota2 from "../../assets/img/games/dota/dota-bg.jpg";
import dontfeed from "../../assets/img/defaultMatchBanner.jpg";
import Col from "react-bootstrap/Col";
import LeagueLogo from "./LeagueLogo";
import LeagueTitle from "./LeagueTitle";
import Row from "react-bootstrap/Row";
import LeagueInfo from "./LeagueInfo";

export default function LeagueBanner({ league, joinLeague }) {
	let banner;
	switch (league?.game) {
		case "DOTA2":
			banner = dota2;
			break;
		default:
			banner = dontfeed;
	}
	return (
		<Col className="game-banner" style={{ backgroundImage: `url(${banner}` }}>
			<div className="pt-5">
				<LeagueLogo logo={league?.logo} />
				<LeagueTitle name={league?.name} />
			</div>
			<Row className="py-5">
				<Col xs={0} md={3} />
				<Col>
					<LeagueInfo league={league} joinLeague={joinLeague} />
				</Col>
				<Col xs={0} md={3} />
			</Row>
		</Col>
	);
}
