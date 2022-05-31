import React from "react";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

export default function PlayerHistory({ players }) {
	let playerHistoryTabContent = (
		<h3>Currently no players have joined this team</h3>
	);
	if (players?.length !== 0) {
		playerHistoryTabContent = (
			<Table striped bordered>
				<thead>
					<tr>
						<th>Username</th>
						<th>Date Joined</th>
						<th>Date Left</th>
					</tr>
				</thead>
				<tbody>
					{players.map((player, index) => (
						<tr key={index}>
							<td>{player.username}</td>
							<td>{player.dateJoined}</td>
							<td>{player.dateLeft}</td>
						</tr>
					))}
				</tbody>
			</Table>
		);
	}

	return <Col id="team-player-history">{playerHistoryTabContent}</Col>;
}
