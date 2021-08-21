import React from "react";
import defaultUser from "../../assets/img/logos/users/default_profile_pic.jpeg"

export default function User({profilePic, username, teams}) {
    let teamNames = teams?.activeTeams?.map((team, index) => <h6 key={index} className="team-player">{team.name}.{username}</h6>)
    return (
        <div className="col s6">
            <div className="row">
                <div className="col s3">
                    <img src={profilePic ?? defaultUser} className="picture" alt={username} />
                </div>
                <div className="col s9 left-align player-names-info df-light-grey-text">
                    <h4 className="player-name">{username}</h4>
                    {teamNames}
                </div>
            </div>
        </div>
    )
}