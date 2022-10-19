import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function TeamCreationPage(props) {
	const { teamCreate } = props;
	const [teamState, setTeamState] = useState({});
	const [formValidation, setFormValidation] = useState({});
	// const [errorHandler, setErrorHandler] = useState({
	//     hasError: false,
	//     message: "",
	// });
	return (
		<Container fluid className="app-container df-dark-background-2">
			<Row>
				<Col className="my-5">
					<h1 className="page-title">Create A Team</h1>
				</Col>
			</Row>
			<Row className="px-5">
				<Form
					onSubmit={event => {
						event.preventDefault();
						teamCreate(teamState);
					}}
				>
					<Row>
						<Col>
							<Form.Group as={Col} className="mb-3" controlId="teamCreateName">
								<Form.Label className="ms-3">Team Name</Form.Label>
								<Form.Control required type="text" placeholder="Team Name" />
								<Form.Text
									className={
										teamState.name
											? formValidation.validName
												? "valid"
												: "invalid"
											: "text-muted"
									}
								>
									Must be unique
								</Form.Text>
							</Form.Group>
							<Form.Group
								as={Col}
								className="mb-3"
								controlId="teamCreatePassword"
							>
								<Form.Label className="ms-3">Password</Form.Label>
								<Form.Control
									type="password"
									placeholder="Password"
									onChange={event => {
										const password = event.target.value;
										setTeamState({ ...teamState, ...{ password } });
									}}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="teamCreateMotto">
								<Form.Label>Team Motto</Form.Label>
								<Form.Control
									as="textarea"
									rows={5}
									onChange={event => {
										const motto = event.target.value;
										setTeamState({ ...teamState, ...{ motto } });
									}}
								/>
							</Form.Group>
						</Col>
						<Col>
							<Card className="logo-preview"></Card>
						</Col>
					</Row>
					{formValidation.validName ? (
						<div className="d-grid gap-2">
							<Button size="lg" variant="primary" type="submit">
								Create League
							</Button>
						</div>
					) : (
						<div className="d-grid gap-2">
							<Button
								size="lg"
								variant="secondary"
								className="df-light-grey-text"
								onMouseEnter={e => {
									e.target.textContent = "Form is not Finished";
								}}
								onMouseLeave={e => {
									e.target.textContent = "Finish Registration Form";
								}}
							>
								Finish Registration Form
							</Button>
						</div>
					)}
				</Form>
			</Row>
		</Container>
	);
}

export default TeamCreationPage;
