import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import Contact from "./Contact";

export default function Support({ contacts, rules }) {
	let leagueContacts = <h1>Currently no contacts have been created</h1>;
	let rulesContent = "No rules have been established";
	if (contacts) {
		if (contacts.length !== 0) {
			leagueContacts = contacts?.map((contact, index) => (
				<Contact key={index} contact={contact} />
			));
		}
	}
	return (
		<Col id="support">
			<Card className="df-dark-background df-light-grey-text support">
				<Card.Body className="card-content">
					<Row className="row contact-top-row">
						<Col s={4}>
							<h5>Name</h5>
						</Col>
						<Col s={4}>
							<h5>Job</h5>
						</Col>
						<Col s={4}>
							<h5>Contact</h5>
						</Col>
					</Row>
					<hr />
					<Row className="contact">{leagueContacts}</Row>
				</Card.Body>
			</Card>
			<Card className="df-dark-background df-light-grey-text support">
				<Card.Body className="card-content">
					{/* <span className="card-title"> */}
					<h5>Rules</h5>
					{/* </span> */}
					<p>{rules ?? rulesContent}</p>
				</Card.Body>
			</Card>
		</Col>
	);
}
