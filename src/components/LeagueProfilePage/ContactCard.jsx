import React from "react";
import Modal from "react-bootstrap/Modal";

export default function ContactCard({ contact, show, handleClose }) {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Body className="contact-card-modal">
				{contact?.phoneNumber ? (
					<React.Fragment>
						<div className="left">Phone:</div>
						<div>{contact?.phoneNumber}</div>
					</React.Fragment>
				) : null}
				{contact?.emailAddress ? (
					<React.Fragment>
						<div className="left">Email:</div>
						<a href={"mailto:" + contact?.emailAddress}>
							{contact?.emailAddress}
						</a>
					</React.Fragment>
				) : null}
				{contact?.facebook ? (
					<React.Fragment>
						<div className="left">Facebook:</div>
						<a
							href={"https://www.facebook.com" + contact?.facebook}
							target="_blank"
							rel="noopener noreferrer"
						>
							{contact?.facebook}
						</a>
					</React.Fragment>
				) : null}
				{contact?.discord ? (
					<React.Fragment>
						<div className="left">Discord:</div>
						<div>{contact?.discord}</div>
					</React.Fragment>
				) : null}
			</Modal.Body>
		</Modal>
	);
}
