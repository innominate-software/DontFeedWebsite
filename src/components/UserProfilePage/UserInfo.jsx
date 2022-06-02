import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function UserInfo({
	dateJoined,
	lastOnline,
	numberOfActiveLeagues,
	numberOfFirstPlaceTrophies,
}) {
	return (
		<Col>
			<Card className="blue-grey darken-1 rounded">
				<Card.Body className="df-dark-background df-light-grey-text">
					<Row>
						<Col>
							<span>Date Joined: {dateJoined}</span>
						</Col>
						<Col>
							<span>Last Online: {lastOnline}</span>
						</Col>
					</Row>
					<br />
					<Row>
						<Col>
							<span>Current Active Leagues: {numberOfActiveLeagues}</span>
						</Col>
						<Col>
							<span>1st Place Trophies: {numberOfFirstPlaceTrophies}</span>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</Col>
	);
}
