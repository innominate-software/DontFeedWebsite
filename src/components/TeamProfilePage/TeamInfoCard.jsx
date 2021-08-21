import React from "react";

export default function TeamInfoCard({teamInfo}) {
    return (
        <div className="row">
            <div className="card blue-grey darken-1 rounded">
                <div className="card-content df-dark-background df-light-grey-text">
                    <h6>{teamInfo}</h6>
                </div>
            </div>
        </div>
    )
}