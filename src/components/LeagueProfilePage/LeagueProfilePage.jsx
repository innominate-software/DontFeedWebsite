import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Standings from "./Standings";
import LeagueMatches from "./LeagueMatches";
import Support from "./Support";
import LeagueBanner from "./LeagueBanner";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getLeague } from "../../redux/features/league-profile.feature";

let LeagueProfilePage = () => {
	let dispatch = useDispatch();
	let leagueState = useSelector(store => {
		return store["league"];
	});

	const id = useParams().id;
	useEffect(() => {
		async function fetchData() {
			dispatch(getLeague(id));
		}
		fetchData();
	}, [dispatch, id]);

	let { loading, errorMessage, league } = leagueState;

	const joinLeague = event => {
		event.preventDefault();
		console.log("joining league maybe");
	};
	console.log(league);
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
};

export default LeagueProfilePage;
