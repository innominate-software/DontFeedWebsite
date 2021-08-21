import React from "react";
import TableHeader from "../Table/TableHeader";
import TableBody from "../Table/TableBody";

export default function Standings({standings}) {
    const header = ["Standing", "Team", "Wins", "Losses", "Draws", "Win Ratio", "Streak"]
    let standingsTabContent = <h1>Currently no standings recorded</h1>
    if (standings) {
        if (standings.length !== 0) {
            standingsTabContent =
                <table className="responsive-table striped df-">
                    <thead className="df-table-head df-light-grey-text">
                    <TableHeader header={header} />
                    </thead>
                    <TableBody body={standings} />
                </table>
        }
    }
    return (
        <div id="standings" className="col s12">
            {standingsTabContent}
        </div>
    )
}