import React from "react";
import HelpButton from "./HelpButton";

export default function HelpButtons(props) {
    return(
        <div className="row">
            <div className="col s4">
                <HelpButton label="Submit Feedback" />
            </div>
            <div className="col s4">
                <HelpButton label="Report Cheater" />
            </div>
            <div className="col s4">
                <HelpButton label="Change Password" />
            </div>
        </div>
    )
}