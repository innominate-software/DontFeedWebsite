import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ContactCard from "./ContactCard";

export default function Contact({ contact }) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	let email = contact?.emailAddress;
	let phone = contact?.phoneNumber;
	let facebook = contact?.facebook;
	let discord = contact?.discord;
	let contactElement;
	let numberOfContacts = 0;

	if (email) {
		numberOfContacts++;
	}
	if (phone) {
		numberOfContacts++;
	}
	if (facebook) {
		numberOfContacts++;
	}
	if (discord) {
		numberOfContacts++;
	}
	if (numberOfContacts === 1) {
		if (email)
			contactElement = (
				<a href={"mailto:" + email}>
					<h5>{email}</h5>
				</a>
			);
		if (phone) contactElement = <h5>{phone}</h5>;
		if (facebook)
			contactElement = (
				<a
					href={"https://www.facebook.com" + facebook}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h5>{facebook}</h5>
				</a>
			);
		if (discord) contactElement = <h5>{phone}</h5>;
	}
	return (
		<Row>
			<Col s={4} className="left-align">
				<h5>{contact.name}</h5>
			</Col>
			<Col s={4} className="left-align">
				<h5>{contact.job}</h5>
			</Col>
			<Col s={4} className="right-align contact-card">
				{numberOfContacts === 1 ? (
					contactElement
				) : (
					<Button variant="primary" onClick={handleShow}>
						<h5>Contact Card</h5>
					</Button>
				)}
			</Col>
			<ContactCard contact={contact} show={show} handleClose={handleClose} />
		</Row>
	);
}
