import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function LoginCard({ setLoginModalShow, setRegisterModalShow }) {
	const openLoginModal = () => {
		setLoginModalShow(true);
	};
	const openRegisterModal = () => {
		setRegisterModalShow(true);
	};
	return (
		<Card className="login-card df-pink-background">
			<Card.Body>
				<h2>You are not logged in!</h2>
				<p>Membership is completely free</p>
				<Button
					onClick={openLoginModal}
					className="btn btn-primary btn-lg me-5"
				>
					Login
				</Button>
				<Button
					onClick={openRegisterModal}
					className="btn btn-secondary btn-lg ms-5"
				>
					Sign up
				</Button>
			</Card.Body>
		</Card>
	);
}

export default LoginCard;
