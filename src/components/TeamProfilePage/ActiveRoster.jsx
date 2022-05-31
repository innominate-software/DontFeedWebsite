import React from "react";
import Col from "react-bootstrap/Col";
import ActivePlayers from "./ActivePlayers";

export default function ActiveRoster({ players }) {
	let rows = <h3>Currently no active players</h3>;
	if (players) {
		if (players.length !== 0) {
			rows = [];
			for (let i = Math.ceil(players?.length / 6); i > 0; i--) {
				let rowOfPlayers = [];
				if (players?.length > 6) {
					rowOfPlayers = players.splice(0, 6);
				} else {
					rowOfPlayers = players;
				}
				rows.push(<ActivePlayers key={i} players={rowOfPlayers} />);
			}
		}
	}
	return (
		<Col id="active-roster">
			<h1 className="df-light-grey-text">Active Roster</h1>
			{rows}
		</Col>
	);
}
