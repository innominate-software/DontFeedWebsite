import React from "react";
import Card from "react-bootstrap/Card";

export default function OnlinePlayers(props) {
	return (
		<Card className="text-center df-dark-background df-light-grey-text">
			<Card.Header>Online Players: 1</Card.Header>
			<Card.Body>
				<h5 className="card-title">whether or not there are players online</h5>
			</Card.Body>
		</Card>
	);
}
