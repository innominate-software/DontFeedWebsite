import React from "react";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import {
	closeSubmitFeedbackModal,
	openSubmitFeedbackModal,
} from "../../../redux/features/submit-feedback-modal.feature";

let SubmitFeedbackModal = () => {
	let dispatch = useDispatch();

	let submitFeedbackModalState = useSelector(store => {
		return store["submitFeedbackModal"];
	});

	let { isOpen } = submitFeedbackModalState;

	const handleClose = () => {
		dispatch(closeSubmitFeedbackModal());
	};
	const handleShow = () => {
		dispatch(openSubmitFeedbackModal());
	};
	return (
		<React.Fragment>
			<Col>
				<Card
					onClick={handleShow}
					className="text-center df-dark-background df-light-grey-text my-5"
				>
					<Card.Body>
						<Card.Title>Submit Feedback</Card.Title>
					</Card.Body>
				</Card>
			</Col>

			<Modal show={isOpen} onHide={handleClose} className="df-light-grey-text">
				<Modal.Header closeButton className="df-dark-background">
					<Modal.Title>Submit Feedback</Modal.Title>
				</Modal.Header>
				<Modal.Body className="df-dark-background">
					<p>GONNA FIGURE THIS OUT LATER</p>
					<p>GONNA FIGURE THIS OUT LATER</p>
					<p>GONNA FIGURE THIS OUT LATER</p>
					<p>GONNA FIGURE THIS OUT LATER</p>
					<p>GONNA FIGURE THIS OUT LATER</p>
					<p>GONNA FIGURE THIS OUT LATER</p>
					<p>GONNA FIGURE THIS OUT LATER</p>
					<p>GONNA FIGURE THIS OUT LATER</p>
					<p>GONNA FIGURE THIS OUT LATER</p>
					<p>GONNA FIGURE THIS OUT LATER</p>
					<p>GONNA FIGURE THIS OUT LATER</p>
					<p>GONNA FIGURE THIS OUT LATER</p>
				</Modal.Body>
			</Modal>
		</React.Fragment>
	);
};

export default SubmitFeedbackModal;
