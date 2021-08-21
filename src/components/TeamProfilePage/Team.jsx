import React from "react";
import defaultTeam from "../../assets/img/default-team.png";

export default function Team({teamLogo, teamName}) {
    return (
        <div className="col s6">
            <div className="row">
                <div className="col s3">
                    <img src={teamLogo ? teamLogo : defaultTeam} className="picture" alt={teamName} />
                </div>
                <div className="col s9 left-align player-names-info df-light-grey-text">
                    <h4 className="team-name">{teamName}</h4>
                </div>
            </div>
        </div>
    )
}