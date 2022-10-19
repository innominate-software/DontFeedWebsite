import React from "react";
import HelpButtons from "./HelpButtons";
import FAQs from "./FAQs";
import Container from "react-bootstrap/Container";

function SupportPage(props) {
	const questions = [
		{
			question: "Question 1",
			answer: "Lorem ipsum dolor sit amet.",
		},
		{
			question: "Question 2",
			answer: "Lorem ipsum dolor sit amet.",
		},
		{
			question: "Question 3",
			answer: "Lorem ipsum dolor sit amet.",
		},
		{
			question: "Question 4",
			answer: "Lorem ipsum dolor sit amet.",
		},
		{
			question: "Question 5",
			answer: "Lorem ipsum dolor sit amet.",
		},
		{
			question: "Question 6",
			answer: "Lorem ipsum dolor sit amet.",
		},
		{
			question: "Question 7",
			answer: "Lorem ipsum dolor sit amet.",
		},
		{
			question: "Question 8",
			answer: "Lorem ipsum dolor sit amet.",
		},
		{
			question: "Question 9",
			answer: "Lorem ipsum dolor sit amet.",
		},
	];
	return (
		<Container fluid className="app-container df-dark-background-2">
			<HelpButtons />
			<FAQs questions={questions} />
		</Container>
	);
}

export default SupportPage;
