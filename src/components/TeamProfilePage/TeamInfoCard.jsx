import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export default function TeamInfoCard({ teamInfo }) {
	return (
		<Row>
			<Card className="blue-grey darken-1 rounded">
				<Card.Body className="df-dark-background df-light-grey-text">
					<h6>{teamInfo ?? "No team info recorded"}</h6>
				</Card.Body>
			</Card>
		</Row>
	);
}
