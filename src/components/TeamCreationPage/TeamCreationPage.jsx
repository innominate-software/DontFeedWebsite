import React, { useState } from 'react';
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { TeamCreateAction } from "../../redux/actions/TeamActions";

function TeamCreationPage(props) {
    const { teamCreate } = props;
    const [teamState, setTeamState] = useState({});
    const history = useHistory();
    // const [errorHandler, setErrorHandler] = useState({
    //     hasError: false,
    //     message: "",
    // });
    return (
        <div>
            <main>
                <div className="app-container container-fluid df-dark-background-2">
                    <div className="container-fluid page-container">
                        <div className="row">
                            <div className="col s12">
                                <h1 className="page-title">Create A Team</h1>
                            </div>
                        </div>
                        <div className="row">
                            <form className="col s12" onSubmit={(event) => {
                                event.preventDefault();
                                teamCreate(teamState, history)
                            }}>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <label className="input-label">Logo<span className="required">*</span><i
                                            className="material-icons input-valid ">check_circle</i>
                                            <input type="text" id="logo" name="logo" required={true} disabled={true}
                                                   onChange={(event) => {
                                                       const logo = event.target.value;
                                                       setTeamState({ ...teamState, ...{ logo } })
                                                   }} />
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <label className="input-label">Team Name<span className="required">*</span><i
                                            className="material-icons input-valid ">check_circle</i>
                                            <input type="text" id="name" name="name" required={true}
                                                   onChange={(event) => {
                                                       const name = event.target.value;
                                                       setTeamState({ ...teamState, ...{ name } })
                                                   }} />
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <label className="input-label">Password<span className="required">*</span><i
                                            className="material-icons input-valid ">check_circle</i>
                                            <input type="password" id="teamPassword" name="teamPassword" required={true}
                                                   onChange={(event) => {
                                                       const password = event.target.value;
                                                       setTeamState({ ...teamState, ...{ password } })
                                                   }} />
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <label className="input-label">Team Info
                                            <textarea id="motto" name="motto" className="materialize-textarea"
                                                      onChange={(event) => {
                                                          const motto = event.target.value;
                                                          setTeamState({ ...teamState, ...{ motto } })
                                                      }} />
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="grey-btn btn right"><i
                                    className="material-icons right">chevron_right</i>Create Team
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        team: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        teamCreate: (teamState, history, setErrorHandler) => {
            dispatch(TeamCreateAction(teamState, history, setErrorHandler));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamCreationPage);