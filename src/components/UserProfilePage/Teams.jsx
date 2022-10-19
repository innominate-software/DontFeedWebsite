import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Team from "./Team";

export default function Teams({ teams }) {
	// console.log(teams);
	let activeTeams = <h6>Currently not on a team</h6>;
	let previousTeams = <h6>Currently no previous teams</h6>;
	if (teams?.activeTeams?.length !== 0) {
		activeTeams = teams?.activeTeams?.map((team, index) => (
			<Team
				key={index}
				index={index}
				teamLogo={team.logo}
				teamName={team.name}
				dateJoined={team.dateJoined}
			/>
		));
	}
	if (teams?.previousTeams?.length !== 0) {
		previousTeams = teams?.previousTeams?.map((team, index) => (
			<Team
				key={index}
				index={index}
				teamLogo={team.teamLogo}
				teamName={team.name}
				dateJoined={team.dateJoined}
				dateLeft={team.dateLeft}
			/>
		));
	}
	return (
		<Col id="teams">
			<Row>
				<Col s={6} className="df-light-grey-text team-container">
					<Row>
						<h5>Active Teams</h5>
					</Row>
					{activeTeams}
				</Col>
				<Col s={6} className="df-light-grey-text team-container">
					<Row>
						<h5>Previous Teams</h5>
					</Row>
					{previousTeams}
				</Col>
			</Row>
		</Col>
	);
}
