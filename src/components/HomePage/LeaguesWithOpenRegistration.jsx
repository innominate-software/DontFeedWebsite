import React from "react";

export default function LeagueWithOpenRegistration(props) {
    return(
        <React.Fragment>
            <h2 className="my-3 df-light-grey-text">Leagues with Open Registration</h2>
            <div className="card df-dark-background df-light-grey-text">
                <div className="card-body">
                    <div className="accordion">
                        <div className="accordion-item df-dark-background">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed df-dark-background df-light-grey-text"
                                    type="button" data-bs-toggle="collapse" data-bs-target="#openLeaguesOne"
                                    aria-expanded="false" aria-controls="openLeaguesOne">
                                    [INSERT LEAGUE NAME HERE]
                                </button>
                            </h2>
                            <div id="openLeaguesOne"
                                 className="accordion-collapse collapse"
                                 aria-labelledby="openLeaguesOne">
                                <div className="accordion-body">
                                    [INSERT LEAGUE INFO HERE]
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item df-dark-background">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed df-dark-background df-light-grey-text"
                                    type="button" data-bs-toggle="collapse" data-bs-target="#openLeaguesTwo"
                                    aria-expanded="false" aria-controls="openLeaguesTwo">
                                    [INSERT LEAGUE NAME HERE]
                                </button>
                            </h2>
                            <div id="openLeaguesTwo"
                                 className="accordion-collapse collapse"
                                 aria-labelledby="openLeaguesTwo">
                                <div className="accordion-body">
                                    [INSERT LEAGUE INFO HERE]
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item df-dark-background">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed df-dark-background df-light-grey-text"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#openLeaguesThree"
                                    aria-expanded="false"
                                    aria-controls="openLeaguesThree">
                                    [INSERT LEAGUE NAME HERE]
                                </button>
                            </h2>
                            <div id="openLeaguesThree"
                                 className="accordion-collapse collapse"
                                 aria-labelledby="openLeaguesThree">
                                <div className="accordion-body">
                                    [INSERT LEAGUE INFO HERE]
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item df-dark-background">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed df-dark-background df-light-grey-text"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#openLeaguesFour" aria-expanded="false"
                                    aria-controls="openLeaguesFour">
                                    [INSERT LEAGUE NAME HERE]
                                </button>
                            </h2>
                            <div id="openLeaguesFour" className="accordion-collapse collapse"
                                 aria-labelledby="openLeaguesFour">
                                <div className="accordion-body">
                                    [INSERT LEAGUE INFO HERE]
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item df-dark-background">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed df-dark-background df-light-grey-text"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#openLeaguesFive" aria-expanded="false"
                                    aria-controls="openLeaguesFive">
                                    [INSERT LEAGUE NAME HERE]
                                </button>
                            </h2>
                            <div id="openLeaguesFive" className="accordion-collapse collapse"
                                 aria-labelledby="openLeaguesFive">
                                <div className="accordion-body">
                                    [INSERT LEAGUE INFO HERE]
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}