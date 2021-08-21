import React from "react";
import TableHeader from "../Table/TableHeader";
import TableBody from "../Table/TableBody";

export default function Leagues({leagues}) {
    const header = ["Game", "Name", "Season", "Dates", "Stage", "Team", "Placement", "W/L/D"]
    let leagueTabContent = <h3>Currently no leagues have been recorded</h3>;
    if (leagues) {
        if (leagues.length !== 0) {
            leagueTabContent =
                <table className="responsive-table striped df-">
                    <thead className="df-table-head df-light-grey-text">
                    <TableHeader header={header} />
                    </thead>
                    <TableBody body={leagues} />
                </table>
        }
    }
    return (
        <div id="leagues" className="col s12">
            {leagueTabContent}
        </div>
    )
}