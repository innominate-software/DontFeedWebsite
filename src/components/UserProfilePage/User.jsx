import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import defaultUser from "../../assets/img/logos/users/default_profile_pic.jpeg";

export default function User({ profilePic, username, teams }) {
	let teamNames = teams?.map((team, index) => (
		<h6 key={index} className="team-player">
			{team.name}.{username}
		</h6>
	));
	return (
		<Col>
			<Row>
				<Col s={3}>
					<img
						src={profilePic ?? defaultUser}
						className="picture"
						alt={username}
					/>
				</Col>
				<Col s={9} className="left-align player-names-info df-light-grey-text">
					<h4 className="player-name">{username}</h4>
					{teamNames}
				</Col>
			</Row>
		</Col>
	);
}
