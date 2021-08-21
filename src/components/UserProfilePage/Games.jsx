import React from "react";
import dota2logo from "../../assets/img/games/dota/logo.png";
import lollogo from "../../assets/img/games/lol/logo.png";
import OWlogo from "../../assets/img/games/overwatch/logo.png";
import smashlogo from "../../assets/img/games/smash/logo.png";
import maddenlogo from "../../assets/img/games/madden/logo.png";

export default function Games({username, games}) {
    return(
        <div id="games" className="col s12 df-light-grey-text">
            <h2>Current Games {username} plays</h2>
            <div className="row user-game-bubbles">
                <div className="col s1" />
                <div className="col s2">
                    <img src={dota2logo} className={(games?.includes("DOTA2")) ? "picture" : "picture does-not-play"} alt="Dota 2" />
                </div>
                <div className="col s2">
                    <img src={lollogo} className={(games?.includes("LOL")) ? "picture" : "picture does-not-play"} alt="League" />
                </div>
                <div className="col s2">
                    <img src={OWlogo} className={(games?.includes("OW")) ? "picture" : "picture does-not-play"} alt="Overwatch" />
                </div>
                <div className="col s2">
                    <img src={smashlogo} className={(games?.includes("SMASH")) ? "picture" : "picture does-not-play"} alt="Smash" />
                </div>
                <div className="col s2">
                    <img src={maddenlogo} className={(games?.includes("MADDEN")) ? "picture" : "picture does-not-play"} alt="Madden" />
                </div>
                <div className="col s1" />
            </div>
        </div>
    )
}