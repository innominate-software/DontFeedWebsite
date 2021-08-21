import React from "react";

export default function TableColumn({column}) {
    return (
        <td className={column.className}>
            {column.text}
        </td>
    )
}