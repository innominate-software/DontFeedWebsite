import React from "react";
import TableRow from "./TableRow";

export default function TableBody({body}) {
    const rows = body?.map((row, index) => <TableRow key={index} row={row} />);
    return (
        <tbody className="df-light-grey-text df-table-tr">
        {rows}
        </tbody>
    )
}