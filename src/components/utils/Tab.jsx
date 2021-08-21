import React from "react";

export default function Tab({href, size, text}) {
    return(
        <li className={"tab col s" + size + " df-tab df-dark-background df-light-grey-text"}><a
            className="active df-light-grey-text" href={href}>{text}</a></li>
    )
}