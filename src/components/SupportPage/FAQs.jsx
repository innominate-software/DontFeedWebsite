import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

export default function FAQs({ questions }) {
	let listOfQuestions = questions.map(
		(query, index) => (
			<Accordion.Item eventKey={index} key={index}>
				<Accordion.Header className="faqs">{query.question}</Accordion.Header>
				<Accordion.Body>{query.answer}</Accordion.Body>
			</Accordion.Item>
		)
	)
	return (
		<Row className="mb-5">
			<Col>
				<Card className="df-dark-background df-light-grey-text">
					<Card.Header>FAQ's</Card.Header>
					<Card.Body>
						<Card.Text>
							<Accordion>
								{listOfQuestions}
							</Accordion>
						</Card.Text>
					</Card.Body>
					<Card.Footer className="text-muted">If you don’t see your question here, feel free to submit
						feedback</Card.Footer>
				</Card>
			</Col>
		</Row>
	)
}