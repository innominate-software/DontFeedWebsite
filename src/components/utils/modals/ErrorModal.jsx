import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { closeErrorModal } from "../../../redux/features/error-modal.feature";

let ErrorModal = () => {
	let dispatch = useDispatch();

	let errorModalState = useSelector(store => {
		return store["errorModal"];
	});

	let { isOpen } = errorModalState;

	const handleClose = () => {
		dispatch(closeErrorModal());
	};
	const message = "GENERIC MESSAGE";
	return (
		<Modal
			show={isOpen}
			onHide={handleClose}
			backdrop="static"
			keyboard={false}
		>
			<Modal.Header closeButton>
				<Modal.Title>ERROR</Modal.Title>
			</Modal.Header>
			<Modal.Body>{message}</Modal.Body>
			<Modal.Footer>
				<Button variant="primary" onClick={handleClose}>
					Understood
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ErrorModal;
