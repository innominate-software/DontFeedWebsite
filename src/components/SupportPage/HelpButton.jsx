import React from "react";
import Card from "react-bootstrap/Card";

export default function HelpButton({ label }) {
	return (
		<Card className="text-center df-dark-background df-light-grey-text my-5">
			<Card.Body>
				<Card.Title>{label}</Card.Title>
			</Card.Body>
		</Card>
	)
}