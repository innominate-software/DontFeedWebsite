import React from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

export default function MostRecentLeagues(props) {
	return (
		<React.Fragment>
			<h2 className="my-3 df-light-grey-text">Most Recent Leagues</h2>
			<Card className="df-dark-background df-light-grey-text">
				<Card.Body>
					<Accordion defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>[INSERT LEAGUE NAME HERE]</Accordion.Header>
							<Accordion.Body>[INSERT LEAGUE INFO HERE]</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>[INSERT LEAGUE NAME HERE]</Accordion.Header>
							<Accordion.Body>[INSERT LEAGUE INFO HERE]</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>[INSERT LEAGUE NAME HERE]</Accordion.Header>
							<Accordion.Body>[INSERT LEAGUE INFO HERE]</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>[INSERT LEAGUE NAME HERE]</Accordion.Header>
							<Accordion.Body>[INSERT LEAGUE INFO HERE]</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>[INSERT LEAGUE NAME HERE]</Accordion.Header>
							<Accordion.Body>[INSERT LEAGUE INFO HERE]</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Card.Body>
			</Card>
		</React.Fragment>
	);
}
