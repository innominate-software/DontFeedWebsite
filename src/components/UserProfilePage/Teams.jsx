import React from 'react';
import Team from "./Team";

export default function Teams({teams}) {
    let activeTeams = teams?.activeTeams
        ? teams?.activeTeams.map((team, index) =>
            <Team key={index} index={index}
                  teamLogo={team.logo}
                  teamName={team.name}
                  startDate={team.dateCreated} />)
        : <h6>Currently not on a team</h6>
    let previousTeams = teams?.previousTeams
        ? teams?.previousTeams.map((team, index) =>
            <Team key={index} index={index}
                  teamLogo={team.teamLogo}
                  teamName={team.teamName}
                  startDate={team.startDate}
                  endDate={team.endDate} />)
        : <h6>Currently no previous teams</h6>
    return (
        <div id="teams" className="col s12">
            <div className="row">
                <div className="col s6 df-light-grey-text team-container">
                    <div className="row">
                        <h5>Active Teams</h5>
                    </div>
                    {activeTeams}
                </div>
                <div className="col s6 df-light-grey-text team-container">
                    <div className="row">
                        <h5>Previous Teams</h5>
                    </div>
                    {previousTeams}
                </div>
            </div>
        </div>
    )
}