import React from "react";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
	closeForgottenCredentialsModal,
	openForgottenCredentialsModal,
} from "../../../redux/features/forgotten-credentials-modal.feature";
import { closeLoginModal } from "../../../redux/features/login-modal.feature";

let ForgottenCredentialsModal = () => {
	let dispatch = useDispatch();

	let forgottenCredentialsModalState = useSelector(store => {
		return store["forgottenCredentialsModal"];
	});

	let { isOpen } = forgottenCredentialsModalState;

	const handleClose = () => {
		dispatch(closeForgottenCredentialsModal());
	};
	const handleShow = () => {
		dispatch(openForgottenCredentialsModal());
	};
	return (
		<React.Fragment>
			<Col xs={8} className="df-pink-text text-center">
				{/*todo forgot username password functionality */}
				<p onClick={handleShow} className="pointer">
					forgot username/password
				</p>
			</Col>

			<Modal show={isOpen} onHide={handleClose} className="df-light-grey-text">
				<Modal.Header closeButton className="df-dark-background">
					<Modal.Title>Forgot Username/Password</Modal.Title>
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

export default ForgottenCredentialsModal;
