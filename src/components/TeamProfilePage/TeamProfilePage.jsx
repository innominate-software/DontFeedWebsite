import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Team from "./Team";
import TeamInfo from "./TeamInfo";
import TeamInfoCard from "./TeamInfoCard";
import ActiveRoster from "./ActiveRoster";
import Matches from "./Matches";
import Leagues from "./Leagues";
import PlayerHistory from "./PlayerHistory";
import { team } from "../../assets/dummydata/DummyTeam.json";

function TeamProfilePage(props) {
	return (
		<Container fluid className="app-container df-dark-background-2">
			<Row>
				<Team teamLogo={team?.logo} teamName={team?.name} />
				<TeamInfo
					dateCreated={team?.dateCreated}
					lastUpdated={team?.lastUpdated}
					numberOfActiveLeagues={team?.activeLeagues}
					numberOfFirstPlaceTrophies={team?.firstPlaceTrophies}
				/>
			</Row>
			<TeamInfoCard teamInfo={team?.motto} />
			<Row>
				<Col>
					<Tabs id="teamProfileTabs">
						<Tab eventKey="activeRoster" title="Active Roster">
							<ActiveRoster players={team?.activePlayers} />
						</Tab>
						<Tab eventKey="matches" title="Matches">
							<Matches matches={team?.matches} />
						</Tab>
						<Tab eventKey="leagues" title="Leagues">
							<Leagues leagues={team?.leagues} />
						</Tab>
						<Tab eventKey="playerHistory" title="Player History">
							<PlayerHistory players={team?.playerHistory} />
						</Tab>
					</Tabs>
				</Col>
			</Row>
		</Container>
	);
}

export default TeamProfilePage;
