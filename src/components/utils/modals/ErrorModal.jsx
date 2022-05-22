import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ErrorModal(props) {
	const { show, setShow, setLoginShow, setRegisterShow, errorHandler, setErrorHandler } = props;
	const handleClose = () => {
		setErrorHandler({
			hasError: false,
			message: ""
		})
		setShow(false);
	}
	const handleRegisterShow = () => {
		handleClose()
		setRegisterShow(true);
	}
	const handleLoginShow = () => {
		handleClose()
		setLoginShow(true);
	}
	useEffect(() => {
		if (errorHandler.hasError) {
			setShow(true);
		} else {
			setShow(false);
		}
		
	})
	return (
		<Modal
			show={show}
			onHide={handleClose}
			backdrop="static"
			keyboard={false}
		>
			<Modal.Header closeButton>
				<Modal.Title>ERROR</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{errorHandler.message}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="primary" onClick={handleClose}>Understood</Button>
				{errorHandler.message === "Username or Password are incorrect" ?
					<Button variant="secondary" onClick={handleLoginShow}>Try Again</Button>
					: null}
			</Modal.Footer>
		</Modal>)
}

export default (ErrorModal);
