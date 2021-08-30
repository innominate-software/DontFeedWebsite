import React, { useEffect } from 'react';
import Tabs from "../utils/Tabs";
import Standings from "../utils/TableComponents/Standings";
import LeagueMatches from "../utils/TableComponents/LeagueMatches";
import Support from "./Support";
import League from "./League";
import MatchBanner from "../MatchInfoPage/MatchBanner";
import LeagueInfo from "./LeagueInfo";
import { LeagueReadAction } from "../../redux/actions/LeagueActions";
import { connect } from "react-redux";

function LeagueProfilePage(props) {
	const { read, league, setErrorHandler } = props;
	const id = props.match.params.id;
	useEffect(() => {
		read(id, setErrorHandler)
	}, [read, id, setErrorHandler])
	
	const joinLeague = (event) => {
		event.preventDefault();
		console.log("joining league maybe")
	}
	console.log(league)
	return (
		<div className="app-container container-fluid df-dark-background-2">
			<div className="parallax-container">
				<div className="parallax">
					<MatchBanner game={league?.game?.name}
								 alt="This is the banner that shows this league plays " />
				</div>
				<div className="parallax-overlay">
					<League logo={league?.logo} name={league?.name} />
					<div className="row">
						<div className="col s2" />
						<div className="col s8">
							<LeagueInfo reward={league?.reward ?? "UNDECIDED"} stage={league?.stage}
										season={league?.season}
										joinLeague={joinLeague}
										platform={league?.platform?.toLocaleUpperCase() ?? "UNDECIDED"}
										maxTeams={league?.maxTeams} />
						</div>
						<div className="col s2" />
					</div>
				</div>
			</div>
			<div className="container-fluid page-container">
				<div className="row">
					<div className="col m12">
						<Tabs tabs={[
							{
								href: "#standings",
								size: 4,
								text: "Current Standings"
							},
							{
								href: "#matches",
								size: 4,
								text: "Matches"
							},
							{
								href: "#support",
								size: 4,
								text: "Support"
							},
						]} />
					</div>
				</div>
				<div className="row">
					<Standings standings={league?.standings} />
					<LeagueMatches matches={league?.matches} />
					<Support contacts={league?.contacts} rules={league?.rules} />
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		league: state.leagueState.league
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		read: (id, setErrorHandler) => {
			dispatch(LeagueReadAction(id, setErrorHandler))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LeagueProfilePage);