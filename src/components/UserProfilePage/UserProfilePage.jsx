import React from "react";
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
import { connect } from "react-redux";
import { user } from "../../assets/dummydata/DummyUser.json";

function UserProfilePage() {
	return (
		<Container fluid className="app-container df-dark-background-2">
			<Row className="user-info">
				<User
					profilePic={user?.profilePic}
					username={user?.username}
					teams={user?.teams.activeTeams}
				/>
				<UserInfo
					dateJoined={user?.dateJoined}
					lastOnline={"upcoming with Security Update"}
					numberOfActiveLeagues={user?.activeLeagues}
					numberOfFirstPlaceTrophies={
						user?.numberOfFirstPlaceTrophies ?? "not yet calculating"
					}
				/>
			</Row>
			<Row>
				<Col>
					<Tabs id="userProfileTabs">
						<Tab eventKey="games" title="Games">
							<Games username={user?.username} games={user?.games} />
						</Tab>
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
}

const mapStateToProps = state => {
	return {
		auth: state.authState,
	};
};

export default connect(mapStateToProps)(UserProfilePage);
