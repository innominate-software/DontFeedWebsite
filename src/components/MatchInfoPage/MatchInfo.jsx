import React from "react";

export default function MatchInfo({duration, game, id, matchId, matchDate, matchTime}) {
    switch (game) {
        case 'DOTA2':
            game = "Dota 2"
            break;
        default:
            break;
    }
    return(
        <div className="row page-container">
            <div className="col s4">
                <div>match duration</div>
                <h4>{duration}</h4>
            </div>
            <div className="col s4">
                <div>{game} match id</div>
                <h4>{matchId}</h4>
                <div>Don't Feed match id</div>
                <h4>{id}</h4>
            </div>
            <div className="col s4">
                <div>match date & time</div>
                <h4>{matchDate} {matchTime}</h4>
            </div>
        </div>
    )
}