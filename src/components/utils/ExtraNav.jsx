import React from 'react';

export default function ExtraNav(props) {
    return (
        <div>
            {/* Leagues DropDown */}
            <ul id="leaguesDropdown" className="dropdown-content">
                <li><p>Here is where we will place the leagues that you are apart of and maybe other things</p></li>
            </ul>
            {/* Teams DropDown */}
            <ul id="teamsDropdown" className="dropdown-content">
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li className="divider"></li>
                <li><a href="#!">three</a></li>
            </ul>
            {/* Players DropDown */}
            <ul id="playersDropdown" className="dropdown-content">
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li className="divider"></li>
                <li><a href="#!">three</a></li>
            </ul>
            {/* Matches DropDown */}
            <ul id="matchesDropdown" className="dropdown-content">
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li className="divider"></li>
                <li><a href="#!">three</a></li>
            </ul>
            {/* Support DropDown */}
            <ul id="supportDropdown" className="dropdown-content">
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li className="divider"></li>
                <li><a href="#!">three</a></li>
            </ul>
        </div>
    );
}