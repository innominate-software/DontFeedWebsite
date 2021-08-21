import React from "react";
import ActivePlayer from "./ActivePlayer";

export default function ActivePlayers({players, page}) {
    const rowOfPlayers = players?.map((player, index) => <ActivePlayer key={index} player={player} page={page} />);
    let activePlayers;
    switch (players?.length) {
        case 1:
            activePlayers = <div>
                <div className="col s5" />
                {rowOfPlayers}
                <div className="col s5" />
            </div>;
            break;
        case 2:
            activePlayers = <div>
                <div className="col s4" />
                {rowOfPlayers}
                <div className="col s4" />
            </div>;
            break;
        case 3:
            activePlayers = <div>
                <div className="col s3" />
                {rowOfPlayers}
                <div className="col s3" />
            </div>;
            break;
        case 4:
            activePlayers = <div>
                <div className="col s2" />
                {rowOfPlayers}
                <div className="col s2" />
            </div>;
            break;
        case 5:
            activePlayers = <div>
                <div className="col s1" />
                {rowOfPlayers}
                <div className="col s1" />
            </div>;
            break;
        case 6:
            activePlayers = rowOfPlayers;
            break;
        default:
            break;
    }
    return (
        <div className="row active-players">
            {activePlayers}
        </div>
    )
}