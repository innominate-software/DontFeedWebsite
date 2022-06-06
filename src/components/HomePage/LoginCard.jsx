import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function LoginCard(props) {
	return (
		<Card className="login-card df-pink-background">
			<Card.Body>
				<h2>You are not logged in!</h2>
				<p>Membership is completely free</p>
				<Button
					className="btn btn-primary btn-lg me-5"
					data-bs-toggle="modal"
					data-bs-target="#loginModal"
				>
					Login
				</Button>
				<Button
					className="btn btn-secondary btn-lg ms-5"
					data-bs-toggle="modal"
					data-bs-target="#registerModal"
				>
					Sign up
				</Button>
			</Card.Body>
		</Card>
	);
}

export default LoginCard;
