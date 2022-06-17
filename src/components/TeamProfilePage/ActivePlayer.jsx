import React from "react";
import Col from "react-bootstrap/Col";
import defaultUser from "../../assets/img/logos/users/default_profile_pic.jpeg";

export default function ActivePlayer({ player }) {
	return (
		<Col sm={2} className="df-light-grey-text">
			<img
				src={player.profilePic ?? defaultUser}
				className="team-players"
				alt={player.username}
			/>
			<p className="picture">{player.username}</p>
		</Col>
	);
}
