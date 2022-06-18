import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import defaultTeam from "../../assets/img/default-team.png";

export default function Team({ teamLogo, teamName }) {
	return (
		<Col>
			<Row>
				<Col s={3}>
					<img
						src={teamLogo ? teamLogo : defaultTeam}
						className="picture"
						alt={teamName}
					/>
				</Col>
				<Col s={9} className="left-align player-names-info df-light-grey-text">
					<h4>{teamName}</h4>
				</Col>
			</Row>
		</Col>
	);
}
