import React, { useState } from "react";
import { connect } from "react-redux";
import { LoginAuthAction } from "../../redux/actions/AuthActions";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Form } from "react-bootstrap";

function LoginModal(props) {
	const { login, show, setShow, setRegisterShow, setErrorHandler } = props;
	const [loginState, setLoginState] = useState({});
	const handleClose = () => setShow(false);
	const handleRegisterShow = () => {
		setShow(false);
		setRegisterShow(true);
	}
	return (
		
		<Modal show={show} onHide={handleClose} className="df-light-grey-text">
			<Modal.Header closeButton className="df-dark-background">
				<Modal.Title>Login</Modal.Title>
			</Modal.Header>
			<Modal.Body className="df-dark-background">
				<h5 className="text-center my-2">Not yet a user?
					<span className="df-pink-text ms-1" onClick={handleRegisterShow} style={{cursor: "pointer"}}>
						 Register
					</span>
				</h5>
				<Form onSubmit={
					(event) => {
						event.preventDefault();
						login(loginState, setErrorHandler);
						// todo wait to setshowfalse untill the login returns with info
						setShow(false);
					}}>
					<Form.Group className="mb-4" controlId="loginUsername">
						<Form.Label className="ms-3">Username</Form.Label>
						<Form.Control type="text" placeholder="Username" onChange={(event) => {
							const username = event.target.value;
							setLoginState({ ...loginState, ...{ username } });
						}} />
					</Form.Group>
					<Form.Group className="mb-4" controlId="loginPassword">
						<Form.Label className="ms-3">Password</Form.Label>
						<Form.Control type="password" placeholder="Password" onChange={(event) => {
							const password = event.target.value;
							setLoginState({ ...loginState, ...{ password } });
						}} />
					</Form.Group>
					<Row>
						<Col xs={8} className="df-pink-text text-center">
							{/*todo forgot username password functionality */}
							<p>forgot username/password</p>
						</Col>
						<Col>
							<div className="d-grid gap-2 d-md-flex justify-content-md-end">
								<Button size="lg" variant="primary" className="me-md-2" type="submit">Login</Button>
							</div>
						</Col>
					</Row>
				</Form>
			</Modal.Body>
		</Modal>
	)
}

const mapStateToProps = (state) => {
		return {
			user: state,
		};
	}
;

const mapDispatchToProps = (dispatch) => {
	return {
		login: (loginState, history, setErrorHandler) => {
			dispatch(LoginAuthAction(loginState, setErrorHandler))
		}
	}
	
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
