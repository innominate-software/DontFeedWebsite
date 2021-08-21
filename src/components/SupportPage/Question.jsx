import React from "react";

export default function Question({question, answer}) {
    return(
        <li>
            <div className="collapsible-header df-dark-background df-light-grey-text">{question}</div>
            <div className="collapsible-body df-black-background df-light-grey-text">
                <span>{answer}</span>
            </div>
        </li>
    )
}