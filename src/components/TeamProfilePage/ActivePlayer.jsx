import React from "react";
import defaultUser from "../../assets/img/logos/users/default_profile_pic.jpeg"

export default function ActivePlayer({player, page}) {
    return (
        page !=="MatchInfoPage"
        ?
        <div className="col s2 df-light-grey-text">
            <img src={player.profilePic ? player.profilePic : defaultUser} className="picture" alt={player.username} />
            <p className="picture">{player.username}</p>
        </div>
        :
        <div className="col s2 df-light-grey-text">
            <img src={player.profilePic ? player.profilePic : defaultUser} className="team-players" alt={player.username} />
            <p className="team-players">{player.username}</p>
        </div>
    )
}