import React from "react";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import {
	closeChangePasswordModal,
	openChangePasswordModal,
} from "../../../redux/features/change-password-modal.feature";

let ChangePasswordModal = () => {
	let dispatch = useDispatch();

	let changePasswordModalState = useSelector(store => {
		return store["changePasswordModal"];
	});

	let { isOpen } = changePasswordModalState;

	const handleClose = () => {
		dispatch(closeChangePasswordModal());
	};
	const handleShow = () => {
		dispatch(openChangePasswordModal());
	};
	return (
		<React.Fragment>
			<Col>
				<Card
					onClick={handleShow}
					className="text-center df-dark-background df-light-grey-text my-5"
				>
					<Card.Body>
						<Card.Title>Change Password</Card.Title>
					</Card.Body>
				</Card>
			</Col>

			<Modal show={isOpen} onHide={handleClose} className="df-light-grey-text">
				<Modal.Header closeButton className="df-dark-background">
					<Modal.Title>Change Password</Modal.Title>
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

export default ChangePasswordModal;
