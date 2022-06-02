import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import defaultTeam from "../../assets/img/default-team.png";

export default function Team({
	index,
	teamLogo,
	teamName,
	startDate,
	endDate,
}) {
	return index % 2 === 0 ? (
		<Row className="left-team center">
			<Col>
				<img
					src={teamLogo ? teamLogo : defaultTeam}
					className="picture"
					alt={teamName}
				/>
			</Col>
			<Col className="user-team-info">
				<h6>{teamName}</h6>
				<span>
					{startDate} - {endDate ?? "Current"}
				</span>
			</Col>
		</Row>
	) : (
		<Row className="right-team center">
			<Col className="user-team-info">
				<h6>{teamName}</h6>
				<span>
					{startDate} - {endDate ?? "Current"}
				</span>
			</Col>
			<Col>
				<img
					src={teamLogo ? teamLogo : defaultTeam}
					className="picture"
					alt={teamName}
				/>
			</Col>
		</Row>
	);
}
