import React from 'react';
import MainNav from "../utils/MainNav";
import Footer from "../utils/Footer";
import Tabs from "../utils/Tabs";
import Team from "./Team";
import TeamInfo from "./TeamInfo";
import TeamInfoCard from "./TeamInfoCard"
import ActiveRoster from "./ActiveRoster";
import Matches from "../utils/TableComponents/Matches";
import Leagues from "../utils/TableComponents/Leagues";
import PlayerHistory from "../utils/TableComponents/PlayerHistory";

function TeamProfilePage(props) {
    const { auth, team, tabs } = props;
    return (
        <div>
            <main>
                <div className="app-container container-fluid df-dark-background-2">
                    <MainNav isLoggedIn={auth.isLoggedIn} />
                    <div className="container-fluid page-container">
                        <div className="row team-info">
                            <Team teamLogo={team?.logo} teamName={team?.name} />
                            <TeamInfo dateCreated={team?.dateCreated} lastUpdated={team?.lastUpdated}
                                      numberOfActiveLeagues={team?.activeLeagues}
                                      numberOfFirstPlaceTrophies={team?.firstPlaceTrophies} />
                        </div>
                        {team?.teamInfo ? <TeamInfoCard teamInfo={team?.teamInfo} /> : null}
                        <div className="row">
                            <div className="col s12">
                                <Tabs tabs={tabs} />
                            </div>
                            <ActiveRoster players={team?.activeRoster} page="TeamProfilePage" />
                            <Matches matches={team?.matches} />
                            <Leagues leagues={team?.leagues} />
                            <PlayerHistory exPlayers={team?.playerHistory} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default TeamProfilePage;