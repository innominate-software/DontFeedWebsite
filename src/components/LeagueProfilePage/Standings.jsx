import React from "react";
import Table from "react-bootstrap/Table";

export default function Standings({ standings }) {
	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>Standing</th>
					<th>Team</th>
					<th>Wins</th>
					<th>Losses</th>
					<th>Draws</th>
					<th>Win Ratio</th>
					<th>Streak</th>
				</tr>
			</thead>
			<tbody>
				{standings?.map((standing, index) => (
					<tr key={index}>
						<td>{standing.standing}</td>
						<td>{standing.team.name}</td>
						<td>{standing.wins}</td>
						<td>{standing.losses}</td>
						<td>{standing.draws}</td>
						<td>{standing.winRatio}</td>
						<td>{standing.streak}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
}
