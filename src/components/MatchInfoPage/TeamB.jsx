import React from "react";
import defaultTeam from "../../assets/img/default-team.png";

export default function TeamB({name}) {
    return (
        <div className="row">
            <div className="col s8 match-team-name">
                <h4 className="right">{name}</h4>
            </div>
            <div className="col s4">
                <img className="match-team-pic" src={defaultTeam}
                     alt="this is the team logo for teamA" />
            </div>
        </div>
    )
}