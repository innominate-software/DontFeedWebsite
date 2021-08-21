import React from "react";
import Contact from "./Contact";

export default function Support({contacts, rules}) {
    let leagueContacts = <h1>Currently no contacts have been created</h1>
    let rulesContent = "No rules have been established";
    if (contacts) {
        if (contacts.length !== 0) {
            leagueContacts = contacts?.map((contact, index) => <Contact key={index} contact={contact} />);
        }
    }
    return (
        <div id="support" className="col s12">
            <div className="card df-dark-background df-light-grey-text support">
                <div className="card-content">
                    <div className="row contact-top-row">
                        <div className="col s4"><h5>Name</h5></div>
                        <div className="col s4"><h5>Job</h5></div>
                        <div className="col s4"><h5>Contact</h5></div>
                    </div>
                    <hr />
                    <div className="row contact">
                        {leagueContacts}
                    </div>
                </div>
            </div>
            <div className="card df-dark-background df-light-grey-text support">
                <div className="card-content">
                    <span className="card-title"><h5>Rules</h5></span>
                    <p>{rulesContent}</p>
                </div>
            </div>
        </div>
    )
}