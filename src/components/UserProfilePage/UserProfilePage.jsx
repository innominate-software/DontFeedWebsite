import React from "react";
import User from "./User";
import UserInfo from "./UserInfo";
import Tabs from "../utils/Tabs";
import Games from "./Games";
import Teams from "./Teams";
import Matches from "../utils/TableComponents/Matches";
import Leagues from "../utils/TableComponents/Leagues";
import { connect } from "react-redux";

function UserProfilePage(props) {
    const { user } = props;
    const tabs = [
        {
            href: "#games",
            size: 3,
            text: "Games"
        },
        {
            href: "#teams",
            size: 3,
            text: "Teams"
        },
        {
            href: "#matches",
            size: 3,
            text: "Matches"
        },
        {
            href: "#leagues",
            size: 3,
            text: "Leagues"
        },
    ]
    return (
        <div>
            <main>
                <div className="app-container container-fluid df-dark-background-2">
                    <div className="container-fluid page-container">
                        <div className="row user-info">
                            <User profilePic={user?.profilePic} username={user?.username} teams={user?.teams} />
                            <UserInfo dateJoined={user?.dateJoined} lastOnline={"upcoming with Security Update"}
                                      numberOfActiveLeagues={user?.activeLeagues}
                                      numberOfFirstPlaceTrophies={user?.numberOfFirstPlaceTrophies ?? "not yet calculating"} />
                        </div>
                        <div className="row">
                            <div className="row">
                                <div className="col s12">
                                    <Tabs tabs={tabs} />
                                </div>
                                <Games username={user?.username} games={user?.games} />
                                <Teams teams={user?.teams} />
                                <Matches matches={user?.matches} />
                                <Leagues leagues={user?.leagues} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.authState,
    };
};

export default connect(mapStateToProps)(UserProfilePage);