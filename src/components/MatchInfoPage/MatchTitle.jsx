import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MatchTitle({ eventName, victor, score }) {
	return (
		<Row className="df-light-grey-text match-main-info">
			<Row>
				<h5 className="match-league">{eventName}</h5>
			</Row>
			<Row>
				<Col sm={3} />
				<Col sm={6}>
					<h5 className="green-text match-victor">{victor} Victory</h5>
				</Col>
				<Col sm={3} />
			</Row>
			<Row>
				<Col sm={4} />
				<Col sm={4}>
					<h5 className="match-score">{score}</h5>
				</Col>
				<Col sm={4} />
			</Row>
		</Row>
	);
}
