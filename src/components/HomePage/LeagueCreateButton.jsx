import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import createLeagueImage from "../../assets/img/LeagueCreateImage2.png";

function LeagueCreateButton(props) {
	// TODO: send to league create page
	return (
		<Card
			onClick={() => {
				console.log("this doesnt work ... something about history lol");
			}}
			className="bg-dark text-white my-3 pointer"
		>
			<Card.Img src={createLeagueImage} />
			<Card.ImgOverlay className="d-flex">
				<Card.Title className="m-auto p-5">
					<h1 className="df-pink-text">Click Here To Create Your Own League</h1>
				</Card.Title>
			</Card.ImgOverlay>
		</Card>
	);
}

export default LeagueCreateButton;
