import React from "react";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

export default function Matches({ matches }) {
	let matchTabContent = <h3>Currently no matches have been recorded</h3>;
	if (matches?.length !== 0) {
		matchTabContent = (
			<Table striped bordered>
				<thead>
					<tr>
						<th>Game</th>
						<th>Event</th>
						<th>Home Team</th>
						<th>Away Team</th>
						<th>Map</th>
						<th>Result</th>
						<th>Score</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{matches.map((match, index) => (
						<tr>
							<td>{match.game}</td>
							<td>{match.event}</td>
							<td>{match.homeTeam}</td>
							<td>{match.awayTeam}</td>
							<td>{match.map}</td>
							<td>{match.result}</td>
							<td>{match.score}</td>
							<td>{match.date}</td>
						</tr>
					))}
				</tbody>
			</Table>
		);
	}
	return <Col id="team-matches">{matchTabContent}</Col>;
}
