import React from "react";
import TableHeader from "../Table/TableHeader";
import TableBody from "../Table/TableBody";

export default function Matches({matches}) {
    const header = ["Game", "Event", "Home Team", "Away Team", "Map", "Result", "Score", "Date"]
    let matchesTabContent = <h3>Currently no matches have been recorded</h3>
    if (matches) {
        if (matches.length !== 0) {
            matchesTabContent =
                <table className="responsive-table striped df-">
                    <thead className="df-table-head df-light-grey-text">
                    <TableHeader header={header} />
                    </thead>
                    <TableBody body={matches} />
                </table>
        }
    }
    return (
        <div id="matches" className="col s12">
            {matchesTabContent}
        </div>
    )
}