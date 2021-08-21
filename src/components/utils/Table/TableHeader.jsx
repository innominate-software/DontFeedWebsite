import React from "react";
import TableHead from "./TableHead";

export default function TableHeader({header}) {
    const heads = header.map((head, index) => <TableHead key={index} head={head} />)
    return (
        <tr>{heads}</tr>
    )
}