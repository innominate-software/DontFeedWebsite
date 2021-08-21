import React from "react";
import MainNav from "../utils/MainNav";
import Footer from "../utils/Footer";
import MatchTitle from "./MatchTitle";
import GameBanner from "./GameBanner";
import TeamA from "./TeamA";
import TeamB from "./TeamB";
import MatchInfo from "./MatchInfo";
import MatchPlayers from "./MatchPlayers";


function MatchInfoPage(props) {
    let { auth, match } = props;
    const page = "MatchInfoPage";
    return (
        <div>
            <main>
                <div className="app-container container-fluid df-dark-background-2">
                    <MainNav isLoggedIn={auth.isLoggedIn} />
                    <div className="parallax-container">
                        <div className="parallax">
                            <GameBanner game={match?.game?.name}
                                        alt="This is the banner that shows this match was played in " />
                        </div>
                        <div className="parallax-overlay">
                            <div className="row">
                                <div className="col s2" />
                                <div className="col s8">
                                    <MatchTitle eventName={match.eventName} victor={match.victor} score={match.score} />
                                </div>
                                <div className="col s2" />
                            </div>
                            <div className="row page-container df-light-grey-text">
                                <div className="col s6">
                                    <TeamA name={match?.teamA?.name} />
                                </div>
                                <div className="col s6">
                                    <TeamB name={match?.teamB?.name} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid player-container df-light-grey-text">
                        <MatchInfo id={match?.id} duration={match.duration} game={match?.game?.name}
                                   matchId={match.gameMatchId} matchDate={match.matchDate}
                                   matchTime={match.matchTime} />
                        <MatchPlayers teamA={match?.teamA?.players} teamB={match?.teamB?.players} page={page} />
                        <div className="row space" />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default MatchInfoPage;
