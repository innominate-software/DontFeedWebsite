import React from "react";
import TableHeader from "../Table/TableHeader";
import TableBody from "../Table/TableBody";

export default function LeagueMatches({matches}) {
    const header = ["Home Team", "Away Team", "Map", "Date"];
    const header2 = ["Game", "Event", "Home Team", "Away Team", "Map", "Victor", "Score", "Date"]
    let todaysMatches = matches?.todaysMatches?.length > 0 ? matches?.todaysMatches : "No Matches Scheduled";
    let previousMatches = matches?.previousMatches?.length > 0 ? matches?.previousMatches : "No Matches have been recorded as complete";
    let futureMatches = matches?.futureMatches?.length > 0 ? matches?.futureMatches : "No Matches Scheduled";
    return (
        <div id="matches" className="col s12 df-light-grey-text">
            <div className="row">
                <div className="col s5">
                    <h4>Today's Matches</h4>
                    {typeof todaysMatches === "object" ?
                        <table className="responsive-table striped df-">
                            <thead className="df-table-head df-light-grey-text">
                            <TableHeader header={header} />
                            </thead>
                            <TableBody body={todaysMatches} />
                        </table>
                        : typeof todaysMatches === "string" ?
                            <h6>{todaysMatches}</h6>
                            : null}
                </div>
                <div className="col s2" />
                <div className="col s5">
                    <h4>Future Matches</h4>
                    {typeof futureMatches === "object" ?
                        <table className="responsive-table striped df-">
                        <thead className="df-table-head df-light-grey-text">
                        <TableHeader header={header} />
                        </thead>
                        <TableBody body={futureMatches} />
                    </table>
                        : typeof futureMatches === "string" ?
                            <h6>{futureMatches}</h6>
                            : null}
                </div>
            </div>
            <ul className="collapsible previous-matches">
                <li>
                    <div className="collapsible-header df-dark-background">Previous Matches</div>
                    <div className="collapsible-body">
                        {typeof previousMatches === "object" ?
                            <table className="responsive-table striped df-">
                            <thead className="df-table-head df-light-grey-text">
                            <TableHeader header={header2} />
                            </thead>
                            <TableBody body={previousMatches} />
                        </table>
                        : typeof previousMatches === "string" ?
                        <h6>{previousMatches}</h6>
                        : null}
                    </div>
                </li>
            </ul>
        </div>
    )
}