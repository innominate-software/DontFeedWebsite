import React from "react";

export default function Table({table}) {
    return (
        <table className="responsive-table striped df-">
            <thead className="df-table-head df-light-grey-text">
            <tr>
                <th>Game</th>
                <th>Event</th>
                <th>Home Team</th>
                <th>Away Team</th>
                <th>Map</th>
                <th>Result</th>
                <th>Score</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
            <tr className="df-light-grey-text df-table-tr">
                <td>Dota 2</td>
                <td>WePlay! Pushka League</td>
                <td>Team Name</td>
                <td>Team Name</td>
                <td>-</td>
                <td className="green-text">Win</td>
                <td>41 - 10</td>
                <td>00-00-00</td>
            </tr>
            <tr className="df-light-grey-text df-table-tr">
                <td>Dota 2</td>
                <td>WePlay! Pushka League</td>
                <td>Team Name</td>
                <td>Team Name</td>
                <td>-</td>
                <td className="green-text">Win</td>
                <td>41 - 10</td>
                <td>00-00-00</td>
            </tr>
            <tr className="df-light-grey-text df-table-tr">
                <td>Dota 2</td>
                <td>WePlay! Pushka League</td>
                <td>Team Name</td>
                <td>Team Name</td>
                <td>-</td>
                <td className="red-text">Loss</td>
                <td>41 - 10</td>
                <td>00-00-00</td>
            </tr>
            </tbody>
        </table>
    )
}