import React, { useEffect } from "react";
import User from "./User";
import UserInfo from "./UserInfo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Games from "./Games";
import Teams from "./Teams";
import Matches from "../TeamProfilePage/Matches";
import Leagues from "../TeamProfilePage/Leagues";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../../redux/features/user-profile.feature";

let UserProfilePage = () => {
	let dispatch = useDispatch();
	let userState = useSelector(store => {
		return store["user"];
	});

	const id = useParams().id;
	useEffect(() => {
		async function fetchData() {
			dispatch(getUser(id));
		}
		fetchData();
	}, [dispatch, id]);

	let { loading, errorMessage, user } = userState;

	console.log(user);
	return (
		<Container fluid className="app-container df-dark-background-2">
			<Row className="user-info">
				<User
					profilePic={user?.profilePic}
					username={user?.username}
					teams={user?.teams?.activeTeams}
				/>
				<UserInfo
					dateJoined={user?.date_joined}
					lastOnline={"upcoming with Security Update"}
					numberOfActiveLeagues={user?.numberOfActiveLeagues}
					numberOfFirstPlaceTrophies={user?.numberOfFirstPlaceTrophies}
				/>
			</Row>
			<Row>
				<Col>
					<Tabs id="user-profile-tabs">
						{/* <Tab eventKey="games" title="Games">
							<Games username={user?.username} games={user?.games} />
						</Tab> */}
						<Tab eventKey="teams" title="Teams">
							<Teams teams={user?.teams} />
						</Tab>
						<Tab eventKey="matches" title="Matches">
							<Matches matches={user?.matches} />
						</Tab>
						<Tab eventKey="leagues" title="Leagues">
							<Leagues leagues={user?.leagues} />
						</Tab>
					</Tabs>
				</Col>
			</Row>
		</Container>
	);
};

export default UserProfilePage;
