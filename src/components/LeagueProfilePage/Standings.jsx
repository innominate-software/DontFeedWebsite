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
				{standings?.map((standing, index) => (<tr key={index}>
					{standing?.map((row, index) => (<td key={index} className={row.className}>{row.text}</td>))}
				</tr>))}
			</tbody>
		</Table>
	)
}