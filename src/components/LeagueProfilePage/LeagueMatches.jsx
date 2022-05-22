import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";

export default function LeagueMatches({ matches }) {
	const todaysMatches =
		matches?.todaysMatches?.length > 0
			? matches?.todaysMatches
			: "No Matches Scheduled";
	const previousMatches =
		matches?.previousMatches?.length > 0
			? matches?.previousMatches
			: "No Matches have been recorded as complete";
	const futureMatches =
		matches?.futureMatches?.length > 0
			? matches?.futureMatches
			: "No Matches Scheduled";
	return (
		<Col id="matches" className="df-light-grey-text">
			<Row>
				<Col s={5}>
					<h4>Today's Matches</h4>
					{typeof todaysMatches === "string" ? (
						<h6>{todaysMatches}</h6>
					) : (
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>Home Team</th>
									<th>Away Team</th>
									<th>Map</th>
									<th>Time</th>
								</tr>
							</thead>
							<tbody>
								{todaysMatches.map((match, index) => (
									<tr key={index}>
										<td>{match.homeTeam.name}</td>
										<td>{match.awayTeam.name}</td>
										<td>{match.map}</td>
										<td>{match.time}</td>
									</tr>
								))}
							</tbody>
						</Table>
					)}
				</Col>
				<Col s={2} />
				<Col s={5}>
					<h4>Future Matches</h4>
					{typeof futureMatches === "string" ? (
						<h6>{futureMatches}</h6>
					) : (
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>Home Team</th>
									<th>Away Team</th>
									<th>Map</th>
									<th>Date & Time</th>
								</tr>
							</thead>
							<tbody>
								{futureMatches.map((match, index) => (
									<tr key={index}>
										<td>{match.homeTeam.name}</td>
										<td>{match.awayTeam.name}</td>
										<td>{match.map}</td>
										<td>{match.dateTime}</td>
									</tr>
								))}
							</tbody>
						</Table>
					)}
				</Col>
			</Row>
			<Accordion>
				<Accordion.Item eventKey="0">
					<Accordion.Header>Previous Matches</Accordion.Header>
					<Accordion.Body>
						{typeof previousMatches === "string" ? (
							<h6>{previousMatches}</h6>
						) : (
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Home Team</th>
										<th>Away Team</th>
										<th>Map</th>
										<th>Victor</th>
										<th>Score</th>
										<th>Date & Time</th>
									</tr>
								</thead>
								<tbody>
									{previousMatches.map((match, index) => (
										<tr key={index}>
											<td>{match.homeTeam.name}</td>
											<td>{match.awayTeam.name}</td>
											<td>{match.map}</td>
											<td>{match.victor}</td>
											<td>{match.score}</td>
											<td>{match.dateTime}</td>
										</tr>
									))}
								</tbody>
							</Table>
						)}
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</Col>
	);
}
