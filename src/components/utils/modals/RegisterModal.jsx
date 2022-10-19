import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
	closeRegisterModal,
	openRegisterModal,
} from "../../../redux/features/register-modal.feature";
import { openLoginModal } from "../../../redux/features/login-modal.feature";

let RegisterModal = () => {
	let dispatch = useDispatch();
	let registerModalState = useSelector(store => {
		return store["registerModal"];
	});
	let { isOpen } = registerModalState;
	const handleShow = () => {
		dispatch(openRegisterModal());
	};
	const handleClose = () => {
		dispatch(closeRegisterModal());
	};
	const handleLoginShow = () => {
		dispatch(closeRegisterModal());
		dispatch(openLoginModal());
	};
	// const emailValidationRegex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
	// const passwordValidationRegex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);
	return (
		<React.Fragment>
			<Button className="btn btn-primary" onClick={handleShow}>
				Signup
			</Button>
			<Modal show={isOpen} onHide={handleClose} className="df-light-grey-text">
				<Modal.Header closeButton className="df-dark-background">
					<Modal.Title>Register</Modal.Title>
				</Modal.Header>
				<Modal.Body className="df-dark-background">
					<h5 className="text-center">
						Already a user?
						<span
							className="df-pink-text ms-1"
							onClick={handleLoginShow}
							style={{ cursor: "pointer" }}
						>
							Login
						</span>
					</h5>
					<Form
						onSubmit={event => {
							event.preventDefault();
							// todo allow for error or create a modal for informing of validation email
						}}
					>
						<Form.Group className="mb-3" controlId="registerUsername">
							<Form.Label className="ms-3">Username</Form.Label>
							<Form.Control type="text" placeholder="Username" />
							<Form.Text>Must be unique</Form.Text>
						</Form.Group>
						<Form.Group className="mb-3" controlId="registerEmail">
							<Form.Label className="ms-3">Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
							{/* todo doesnt check for valid email correctly*/}
							<Form.Text>Must be validated to login</Form.Text>
						</Form.Group>
						<Form.Group className="mb-3" controlId="registerPassword">
							<Form.Label className="ms-3">Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
							<Form.Text>
								Must be at least 8 characters and have 1 capitalized letter and
								number
							</Form.Text>
						</Form.Group>
						<Form.Group className="mb-3" controlId="confirmPassword">
							<Form.Label className="ms-3">Confirm Password</Form.Label>
							<Form.Control type="password" placeholder=" Confirm Password" />
							<Form.Text>Must match password</Form.Text>
						</Form.Group>
						<div className="d-grid gap-2">
							<Button size="lg" variant="primary" type="submit">
								Register
							</Button>
						</div>
						<div className="d-grid gap-2">
							<Button
								size="lg"
								variant="secondary"
								className="df-light-grey-text"
							>
								Finish Registration Form
							</Button>
						</div>
					</Form>
				</Modal.Body>
			</Modal>
		</React.Fragment>
	);
};

export default RegisterModal;
