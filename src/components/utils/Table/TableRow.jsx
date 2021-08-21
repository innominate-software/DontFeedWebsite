import React from "react";
import TableColumn from "./TableColumn";

export default function TableRow({row}) {
    const columns = row.map((column, index) => <TableColumn key={index} column={column} />);
    return (
        <tr >
        {columns}
        </tr>
    )
}