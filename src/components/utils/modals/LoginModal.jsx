import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
	closeLoginModal,
	openLoginModal,
} from "../../../redux/features/login-modal.feature";
import { openRegisterModal } from "../../../redux/features/register-modal.feature";
import ForgottenCredentialsModal from "./ForgottenCredentialsModal";

let LoginModal = () => {
	let dispatch = useDispatch();

	let loginModalState = useSelector(store => {
		return store["loginModal"];
	});

	let { isOpen } = loginModalState;

	const handleClose = () => {
		dispatch(closeLoginModal());
	};
	const handleShow = () => {
		dispatch(openLoginModal());
	};
	const handleRegisterShow = () => {
		dispatch(closeLoginModal());
		dispatch(openRegisterModal());
	};
	return (
		<React.Fragment>
			<Button className="btn btn-primary mx-2" onClick={handleShow}>
				Login
			</Button>

			<Modal show={isOpen} onHide={handleClose} className="df-light-grey-text">
				<Modal.Header closeButton className="df-dark-background">
					<Modal.Title>Login</Modal.Title>
				</Modal.Header>
				<Modal.Body className="df-dark-background">
					<h5 className="text-center my-2">
						Not yet a user?
						<span
							className="df-pink-text ms-1"
							onClick={handleRegisterShow}
							style={{ cursor: "pointer" }}
						>
							Register
						</span>
					</h5>
					<Form
						onSubmit={event => {
							event.preventDefault();
							// todo wait to setshowfalse untill the login returns with info
							handleClose();
						}}
					>
						<Form.Group className="mb-4" controlId="loginUsername">
							<Form.Label className="ms-3">Username</Form.Label>
							<Form.Control
								type="text"
								placeholder="Username"
								onChange={event => {
									const username = event.target.value;
								}}
							/>
						</Form.Group>
						<Form.Group className="mb-4" controlId="loginPassword">
							<Form.Label className="ms-3">Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								onChange={event => {
									const password = event.target.value;
								}}
							/>
						</Form.Group>
						<Row>
							<Col xs={8} className="df-pink-text text-center">
								<ForgottenCredentialsModal />
							</Col>
							<Col>
								<div className="d-grid gap-2 d-md-flex justify-content-md-end">
									<Button
										size="lg"
										variant="primary"
										className="me-md-2"
										type="submit"
									>
										Login
									</Button>
								</div>
							</Col>
						</Row>
					</Form>
				</Modal.Body>
			</Modal>
		</React.Fragment>
	);
};

export default LoginModal;
