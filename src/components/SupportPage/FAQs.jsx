import React from "react";
import Question from "./Question";

export default function FAQs({questions}) {
    let listOfQuestions = questions.map((query, index) => <Question key={index} question={query.question} answer={query.answer} />)
    return(
        <div className="row">
            <div className="col s12">
                <div className="card card df-dark-background df-light-grey-text support-button">
                    <div className="card-content">
                        <span className="card-title">FAQ's</span>
                        <ul className="collapsible">
                            {listOfQuestions}
                        </ul>
                    </div>
                    <div className="card-action">
                        <span>If you don’t see your question here, feel free to submit feedback</span>
                    </div>
                </div>
            </div>
        </div>
    )
}