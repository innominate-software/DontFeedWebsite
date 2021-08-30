import React from "react";
import dota2 from '../../assets/img/games/dota/dota-bg.jpg';

export default function LeagueBanner({league}) {
    let banner;
    switch (league.game) {
        case "DOTA2":
            banner = dota2;
            break;
        default:
            banner = null
    }
    return (
        <div className="bg">
            {/*<img src={banner} alt={alt + game + "!"} />*/}
        </div>
    )
}