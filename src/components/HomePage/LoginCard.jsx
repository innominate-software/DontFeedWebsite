import React from "react";
import Card from "react-bootstrap/Card";
import LoginModal from "../utils/modals/LoginModal";
import RegisterModal from "../utils/modals/RegisterModal";

let LoginCard = () => {
	return (
		<Card className="login-card df-pink-background">
			<Card.Body>
				<h2>You are not logged in!</h2>
				<p>Membership is completely free</p>
				<LoginModal />
				<RegisterModal />
			</Card.Body>
		</Card>
	);
};

export default LoginCard;
