import React from "react";
import dota2 from '../../assets/img/games/dota/dota-bg.jpg';

export default function GameBanner({game, alt}) {
    let banner;
    switch (game) {
        case "DOTA2":
            banner = dota2;
            break;
        default:
            banner = null
    }
    return (
        <img src={banner} alt={alt + game + "!"} />
    )
}