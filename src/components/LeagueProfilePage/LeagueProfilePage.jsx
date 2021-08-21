import React from 'react';
import MainNav from '../utils/MainNav';
import Footer from "../utils/Footer";
import Tabs from "../utils/Tabs";
import Standings from "../utils/TableComponents/Standings";
import LeagueMatches from "../utils/TableComponents/LeagueMatches";
import Support from "./Support";
import League from "./League";
import GameBanner from "../MatchInfoPage/GameBanner";
import LeagueInfo from "./LeagueInfo";

function LeagueProfilePage(props) {
    const { auth, league } = props;
    const tabs = [
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
    ]

    const joinLeague = (event) => {
        event.preventDefault();
        console.log("joining league maybe")
    }

    return (
        <div>
            <main>
                <div className="app-container container-fluid df-dark-background-2">
                    <MainNav isLoggedIn={auth.isLoggedIn} />
                    <div className="parallax-container">
                        <div className="parallax">
                            <GameBanner game={league?.game?.name}
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
                                <Tabs tabs={tabs} />
                            </div>
                        </div>
                        <div className="row">
                            <Standings standings={league?.standings} />
                            <LeagueMatches matches={league?.matches} />
                            <Support contacts={league?.contacts} rules={league?.rules} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default LeagueProfilePage;