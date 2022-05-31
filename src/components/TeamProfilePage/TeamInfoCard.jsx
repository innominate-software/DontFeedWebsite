import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export default function TeamInfoCard({ teamInfo }) {
	return (
		<Row className="row">
			<Card className="blue-grey darken-1 rounded">
				<Card.Body className="card-content df-dark-background df-light-grey-text">
					<h6>{teamInfo ?? "No team info recorded"}</h6>
				</Card.Body>
			</Card>
		</Row>
	);
}
