import React from "react";
import Footer from "../utils/Footer";
import HelpButtons from "./HelpButtons";
import FAQs from "./FAQs";

function SupportPage(props) {
    const questions = [
        {
            question: "Question 1",
            answer: "Lorem ipsum dolor sit amet."
        },
        {
            question: "Question 2",
            answer: "Lorem ipsum dolor sit amet."
        },
        {
            question: "Question 3",
            answer: "Lorem ipsum dolor sit amet."
        },
        {
            question: "Question 4",
            answer: "Lorem ipsum dolor sit amet."
        },
        {
            question: "Question 5",
            answer: "Lorem ipsum dolor sit amet."
        },
        {
            question: "Question 6",
            answer: "Lorem ipsum dolor sit amet."
        },
        {
            question: "Question 7",
            answer: "Lorem ipsum dolor sit amet."
        },
        {
            question: "Question 8",
            answer: "Lorem ipsum dolor sit amet."
        },
        {
            question: "Question 9",
            answer: "Lorem ipsum dolor sit amet."
        }
    ]
    return (
        <div>
            <main>
                <div className="app-container container-fluid df-dark-background-2">
                    <div className="container-fluid page-container">
                        <HelpButtons />
                        <FAQs questions={questions} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default SupportPage;
