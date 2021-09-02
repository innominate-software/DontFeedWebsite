import React from "react";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";

export default function LeagueMatches({ matches }) {
	const todaysMatches = matches?.todaysMatches?.length > 0 ? matches?.todaysMatches : "No Matches Scheduled";
	const previousMatches = matches?.previousMatches?.length > 0 ? matches?.previousMatches : "No Matches have been recorded as complete";
	const futureMatches = matches?.futureMatches?.length > 0 ? matches?.futureMatches : "No Matches Scheduled";
	return (
		<div id="matches" className="col s12 df-light-grey-text">
			<div className="row">
				<div className="col s5">
					<h4>Today's Matches</h4>
					{typeof todaysMatches === "string" ?
						<h6>{todaysMatches}</h6>
						: <Table striped bordered hover>
							<thead>
							<tr>
								<th>Home Team</th>
								<th>Away Team</th>
								<th>Map</th>
								<th>Date</th>
							</tr>
							</thead>
							<tbody>
							{todaysMatches.map((match, index) => (<tr key={index}>
								{match.map((row, index) => (
									<td key={index} className={row.className}>
										{row.text}
									</td>))}
							</tr>))}
							</tbody>
						</Table>
					}
				</div>
				<div className="col s2" />
				<div className="col s5">
					<h4>Future Matches</h4>
					{typeof futureMatches === "string" ?
						<h6>{futureMatches}</h6>
						: <Table striped bordered hover>
							<thead>
							<tr>
								<th>Game</th>
								<th>Event</th>
								<th>Home Team</th>
								<th>Away Team</th>
								<th>Map</th>
								<th>Victor</th>
								<th>Score</th>
								<th>Date</th>
							</tr>
							</thead>
							<tbody>
							{futureMatches.map((match, index) => (<tr key={index}>
								{match.map((row, index) => (
									<td key={index} className={row.className}>
										{row.text}
									</td>))}
							</tr>))}
							</tbody>
						</Table>
					}
				</div>
			</div>
			<Accordion>
				<Accordion.Item eventKey="0">
					<Accordion.Header>Previous Matches</Accordion.Header>
					<Accordion.Body>
						{typeof previousMatches === "string" ?
							<h6>{previousMatches}</h6>
							: <Table striped bordered hover>
								<thead>
								<tr>
									<th>Game</th>
									<th>Event</th>
									<th>Home Team</th>
									<th>Away Team</th>
									<th>Map</th>
									<th>Victor</th>
									<th>Score</th>
									<th>Date</th>
								</tr>
								</thead>
								<tbody>
								{previousMatches.map((match, index) => (<tr key={index}>
									{match.map((row, index) => (
										<td key={index} className={row.className}>
											{row.text}
										</td>))}
								</tr>))}
								</tbody>
							</Table>
						}
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</div>
	)
}