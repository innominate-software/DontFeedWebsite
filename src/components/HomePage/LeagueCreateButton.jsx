import React from "react";
import Card from "react-bootstrap/Card";
import createLeagueImage from "../../assets/img/LeagueCreateImage.jpg";

function LeagueCreateButton(props) {
	// TODO: send to league create page
	return (
		<Card
			onClick={() => {
				console.log("this doesnt work");
			}}
			className="bg-dark text-white my-3"
		>
			<Card.Img src={createLeagueImage} />
			<Card.ImgOverlay>
				<Card.Title
					className="my-5 py-5 df-pink-text"
					style={{ WebkitTextStroke: "2px black" }}
				>
					Click Here To Create Your Own League
				</Card.Title>
			</Card.ImgOverlay>
		</Card>
	);
}

export default LeagueCreateButton;
