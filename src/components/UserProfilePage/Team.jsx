import React from "react";
import defaultTeam from "../../assets/img/default-team.png";

export default function Team({index, teamLogo, teamName, startDate, endDate}) {
    return (
        index % 2 === 0 ?
            <div className="row left-team center">
                <div className="col">
                    <img src={teamLogo ? teamLogo : defaultTeam} className="picture" alt={teamName} />
                </div>
                <div className="col user-team-info">
                    <h6>{teamName}</h6>
                    <span>{startDate} - {endDate ? endDate : "Current"}</span>
                </div>
            </div>
            :
            <div className="row right-team center">
                <div className="col user-team-info">
                    <h6>{teamName}</h6>
                    <span>{startDate} - {endDate ? endDate : "Current"}</span>
                </div>
                <div className="col">
                    <img src={teamLogo ? teamLogo : defaultTeam} className="picture" alt={teamName} />
                </div>
            </div>
    )
}