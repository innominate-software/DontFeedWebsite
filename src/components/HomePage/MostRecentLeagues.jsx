import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MostRecentLeagues({ leagues }) {
	return (
		<React.Fragment>
			<h2 className="my-3 df-light-grey-text">Most Recent Leagues</h2>
			<Card className="df-dark-background df-light-grey-text">
				<Card.Body>
					<Accordion>
						{leagues?.map((league, index) => (
							<Accordion.Item eventKey={index} key={index}>
								<Accordion.Header>{league.name}</Accordion.Header>
								<Accordion.Body>
									<Row>
										<Col>View</Col>
										<Col>Game</Col>
										<Col>Max Teams</Col>
										<Col>Platform</Col>
										<Col>Start Date</Col>
									</Row>
									<Row>
										<Col>
											<Link to={"/league/" + league.id}>League</Link>
										</Col>
										<Col>{league.game}</Col>
										<Col>0/{league.maxTeams}</Col>
										<Col>{league.platform.toUpperCase()}</Col>
										<Col>{league.startDate}</Col>
									</Row>
								</Accordion.Body>
							</Accordion.Item>
						))}
					</Accordion>
				</Card.Body>
			</Card>
		</React.Fragment>
	);
}
