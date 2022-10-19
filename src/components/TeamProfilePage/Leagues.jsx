import React from "react";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

export default function Leagues({ leagues }) {
	// console.log(leagues);
	let leagueTabContent = <h3>Currently no leagues have been recorded</h3>;
	if (leagues?.length !== 0) {
		leagueTabContent = (
			<Table striped bordered>
				<thead>
					<tr>
						<th>Game</th>
						<th>Name</th>
						<th>Season</th>
						<th>Dates</th>
						<th>Stage</th>
						<th>Team</th>
						<th>Placement</th>
						<th>W/L/D</th>
					</tr>
				</thead>
				<tbody>
					{leagues?.map((league, index) => (
						<tr key={index}>
							<td>{league.game}</td>
							<td>{league.name}</td>
							<td>{league.season}</td>
							<td>{league.dates}</td>
							<td>{league.stage}</td>
							<td>{league.team}</td>
							<td>{league.placement}</td>
							<td>{league.winLossDraw}</td>
						</tr>
					))}
				</tbody>
			</Table>
		);
	}
	return <Col id="team-leagues">{leagueTabContent}</Col>;
}
