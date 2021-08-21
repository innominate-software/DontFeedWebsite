import React from "react";
import defaultTeam from "../../assets/img/default-team.png";

export default function TeamA({name}) {
    return(
        <div className="row">
            <div className="col s4">
                <img className="match-team-pic" src={defaultTeam}
                     alt="this is the team logo for teamA" />
            </div>
            <div className="col s8 match-team-name">
                <h4 className="left">{name}</h4>
            </div>
        </div>
    )
}