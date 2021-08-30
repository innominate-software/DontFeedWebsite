import React from "react";
import "./HomePage/NewsImages.css";
import dota from "../assets/img/games/dota/dota-bg.jpg"


function Test(props) {
    let game = "Dota 2";
    return (
        <div className="app-container container-fluid df-dark-background-2">
            {/*banner showing game */}
            <div className="bg" style={{"background-image": `url(${dota})`}} />
            <div className="jumbotron">
                {/*league logo*/}
                <div className="location-name"> University of Illinios Urbana-Champaign</div>
                {/*league info*/}
                <p className="building-name">ECE Engineering Building</p>
            </div>
            {/*tabs*/}
        </div>
    )
}

export default Test;