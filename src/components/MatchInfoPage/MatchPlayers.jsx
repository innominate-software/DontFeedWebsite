import React from "react";
import ActivePlayers from "../TeamProfilePage/ActivePlayers";

export default function MatchPlayers({teamA, teamB, page}) {
    return(
        <div className="row match-players">
            <h4>Players</h4>
            <div className="row center-players">
                <div className="col s5">
                    <ActivePlayers players={teamA} page={page} />
                </div>
                <div className="col s1 versus">
                    <h3>VS</h3>
                </div>
                <div className="col s5">
                    <ActivePlayers players={teamB} page={page} />
                </div>
            </div>
        </div>
    )
}