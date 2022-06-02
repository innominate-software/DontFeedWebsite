import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dota2logo from "../../assets/img/games/dota/logo.png";
import lollogo from "../../assets/img/games/lol/logo.png";
import OWlogo from "../../assets/img/games/overwatch/logo.png";
import smashlogo from "../../assets/img/games/smash/logo.png";
import maddenlogo from "../../assets/img/games/madden/logo.png";

export default function Games({ username, games }) {
	return (
		<Col id="games" className="df-light-grey-text">
			<h2>Current Games {username} plays</h2>
			<Row className="user-game-bubbles">
				<Col s={1} />
				<Col s={2}>
					<img
						src={dota2logo}
						className={
							games?.includes("DOTA2") ? "picture" : "picture does-not-play"
						}
						alt="Dota 2"
					/>
				</Col>
				<Col s={2}>
					<img
						src={lollogo}
						className={
							games?.includes("LOL") ? "picture" : "picture does-not-play"
						}
						alt="League of Legends"
					/>
				</Col>
				<Col s={2}>
					<img
						src={OWlogo}
						className={
							games?.includes("OW") ? "picture" : "picture does-not-play"
						}
						alt="Overwatch"
					/>
				</Col>
				<Col s={2}>
					<img
						src={smashlogo}
						className={
							games?.includes("SMASH") ? "picture" : "picture does-not-play"
						}
						alt="Smash"
					/>
				</Col>
				<Col s={2}>
					<img
						src={maddenlogo}
						className={
							games?.includes("MADDEN") ? "picture" : "picture does-not-play"
						}
						alt="Madden"
					/>
				</Col>
				<Col s={1} />
			</Row>
		</Col>
	);
}
