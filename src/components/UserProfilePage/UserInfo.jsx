import React from "react";

export default function UserInfo({dateJoined, lastOnline, numberOfActiveLeagues, numberOfFirstPlaceTrophies}) {
    return(
        <div className="col s6">
            <div className="card blue-grey darken-1 rounded">
                <div className="card-content df-dark-background df-light-grey-text">
                    <div className="row">
                        <div className="col s6"><span>Date Joined: {dateJoined}</span></div>
                        <div className="col s6"><span>Last Online: {lastOnline}</span></div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col s6"><span>Current Active Leagues: {numberOfActiveLeagues}</span></div>
                        <div className="col s6"><span>1st Place Trophies: {numberOfFirstPlaceTrophies}</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}