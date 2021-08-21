import React from "react";

export default function HelpButton({label}) {
    return (
        <div>
            <div data-target={label}
                 className="modal-trigger card df-dark-background df-light-grey-text support-button">
                <div className="card-content">
                    <span className="card-title">{label}</span>
                </div>
            </div>
            <div id={label} className="modal">
                <div className="modal-content">
                    <h4>{label}</h4>
                </div>
            </div>
        </div>
    )
}