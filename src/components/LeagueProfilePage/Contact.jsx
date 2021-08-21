import React from "react";
import ContactCard from "./ContactCard";

export default function Contact({contact}) {
    let email = contact?.contactInformation?.emailAddress;
    let phone = contact?.contactInformation?.phoneNumber;
    let facebook = contact?.contactInformation?.facebook;
    let discord = contact?.contactInformation?.discord;
    let contactElement;
    let numberOfContacts = 0;

    if (email) {
        numberOfContacts++;
    }
    if (phone) {
        numberOfContacts++;
    }
    if (facebook) {
        numberOfContacts++;
    }
    if (discord) {
        numberOfContacts++;
    }

    if (numberOfContacts === 1) {
        if (email) contactElement = <a href={"mailto:" + email}><h5>{email}</h5></a>;
        if (phone) contactElement = <h5>{phone}</h5>;
        if (facebook) contactElement = <a href={"https://www.facebook.com" + facebook} target="_blank" rel="noopener noreferrer"><h5>{facebook}</h5></a>;
        if (discord) contactElement = <h5>{phone}</h5>;
    }
    return (
        <div className="row">
            <div className="col s4 left-align">
                <h5>{contact.name}</h5>
            </div>
            <div className="col s4 left-align">
                <h5>{contact.job}</h5>
            </div>
            <div className="col s4 right-align contact-card">
                {numberOfContacts === 1 ? contactElement : <ContactCard name={contact.name} contact={contact.contactInformation} />}
            </div>
        </div>
    )
}