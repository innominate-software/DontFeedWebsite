import React from "react";
import TableHeader from "../Table/TableHeader";
import TableBody from "../Table/TableBody";

export default function PlayerHistory({players}) {
    const header = ["Username", "Date Joined", "Date Left"]
    let playerHistoryTabContent = <h3>Currently no players have joined this team</h3>;
    if (players) {
        if (players.length !== 0) {
            playerHistoryTabContent =
                <table className="responsive-table striped df-">
                    <thead className="df-table-head df-light-grey-text">
                    <TableHeader header={header} />
                    </thead>
                    {players ? <TableBody body={players} /> : null}
                </table>
        }
    }
    return (
        <div id="player-history" className="col s12">
            {playerHistoryTabContent}
        </div>
    )
}