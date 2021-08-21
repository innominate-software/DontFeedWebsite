import React from "react";

export default function MostRecentLeagues(props) {
    return (
        <React.Fragment>
            <h2 className="my-3 df-light-grey-text">Most Recent Leagues</h2>
            <div className="card df-dark-background df-light-grey-text">
                <div className="card-body">
                    <div className="accordion">
                        <div className="accordion-item df-dark-background">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed df-dark-background df-light-grey-text"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#mostRecentLeagueOne" aria-expanded="true"
                                    aria-controls="mostRecentLeagueOne">
                                    [INSERT LEAGUE NAME HERE]
                                </button>
                            </h2>
                            <div id="mostRecentLeagueOne"
                                 className="accordion-collapse collapse"
                                 aria-labelledby="mostRecentLeagueOne">
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
                                    data-bs-target="#mostRecentLeagueTwo" aria-expanded="false"
                                    aria-controls="mostRecentLeagueTwo">
                                    [INSERT LEAGUE NAME HERE]
                                </button>
                            </h2>
                            <div id="mostRecentLeagueTwo" className="accordion-collapse collapse"
                                 aria-labelledby="mostRecentLeagueTwo">
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
                                    data-bs-target="#mostRecentLeagueThree" aria-expanded="false"
                                    aria-controls="mostRecentLeagueThree">
                                    [INSERT LEAGUE NAME HERE]
                                </button>
                            </h2>
                            <div id="mostRecentLeagueThree" className="accordion-collapse collapse"
                                 aria-labelledby="mostRecentLeagueThree">
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
                                    data-bs-target="#mostRecentLeagueFour" aria-expanded="false"
                                    aria-controls="mostRecentLeagueFour">
                                    [INSERT LEAGUE NAME HERE]
                                </button>
                            </h2>
                            <div id="mostRecentLeagueFour" className="accordion-collapse collapse"
                                 aria-labelledby="mostRecentLeagueFour">
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
                                    data-bs-target="#mostRecentLeagueFive" aria-expanded="false"
                                    aria-controls="mostRecentLeagueFive">
                                    [INSERT LEAGUE NAME HERE]
                                </button>
                            </h2>
                            <div id="mostRecentLeagueFive" className="accordion-collapse collapse"
                                 aria-labelledby="mostRecentLeagueFive">
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
