import React from "react";
import { connect } from "react-redux";
import { LeagueReadAction } from "../../redux/actions/LeagueActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Standings from "./Standings";
import LeagueMatches from "./LeagueMatches";
import Support from "./Support";
import LeagueBanner from "./LeagueBanner";
import { league } from "../../assets/dummydata/DummyLeague.json";

function LeagueProfilePage(props) {
	const joinLeague = event => {
		event.preventDefault();
		console.log("joining league maybe");
	};
	return (
		<Container fluid className="app-container df-dark-background px-0">
			<Row>
				<LeagueBanner league={league} joinLeague={joinLeague} />
			</Row>
			<Row>
				<Tabs
					defaultActiveKey="standings"
					className="mb-3 justify-content-center"
				>
					<Tab eventKey="standings" title="Standings" className="mx-5">
						{league.standings ? (
							<Standings standings={league?.standings} />
						) : (
							<h3>Currently no standings</h3>
						)}
					</Tab>
					<Tab eventKey="matches" title="Matches">
						<LeagueMatches matches={league?.matches} />
					</Tab>
					<Tab eventKey="support" title="Support">
						<Support contacts={league?.contacts} rules={league?.rules} />
					</Tab>
				</Tabs>
			</Row>
		</Container>
	);
}

const mapStateToProps = state => {
	return {
		league: state.leagueState.league,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		read: (id, setErrorHandler) => {
			dispatch(LeagueReadAction(id, setErrorHandler));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LeagueProfilePage);
