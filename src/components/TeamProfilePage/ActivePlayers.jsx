import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ActivePlayer from "./ActivePlayer";

export default function ActivePlayers({ players }) {
	const rowOfPlayers = players?.map((player, index) => (
		<ActivePlayer key={index} player={player} />
	));
	let size;
	switch (players?.length) {
		case 1:
			size = 5;
			break;
		case 2:
			size = 4;
			break;
		case 3:
			size = 3;
			break;
		case 4:
			size = 2;
			break;
		case 5:
			size = 1;
			break;
		case 6:
			size = 0;
			break;
		default:
			break;
	}
	return (
		<Row className="active-players">
			{size !== 0 ?? <Col s={size} />}
			{rowOfPlayers}
			{size !== 0 ?? <Col s={size} />}
		</Row>
	);
}
