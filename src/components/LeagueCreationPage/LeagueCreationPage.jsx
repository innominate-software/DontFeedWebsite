import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createLeague } from "../../redux/features/league-creation.feature";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LeagueCreationPage(props) {
	const [leagueState, setLeagueState] = useState({});
	const navigate = useNavigate();
	// const [formValidation, setFormValidation] = useState({});

	let dispatch = useDispatch();

	let createLeagueState = useSelector(store => {
		return store["leagueCreation"];
	});

	let { loading, success, league } = createLeagueState;

	useEffect(() => {
		// redirect user to login page if registration was successful
		if (success) navigate(`/leagues/${league.id}`);
	}, [navigate, success, league]);

	const handleSubmitForm = e => {
		e.preventDefault();
		dispatch(createLeague(leagueState));
	};
	return (
		<Container fluid className="app-container df-dark-background-2">
			<Row>
				<Col className="my-5">
					<h1 className="page-title">CREATE A LEAGUE</h1>
				</Col>
			</Row>
			<Row className="px-5">
				<Form onSubmit={handleSubmitForm}>
					<Row>
						<Form.Group as={Col} className="mb-3" controlId="leagueCreateName">
							<Form.Label className="ms-3">League Name</Form.Label>
							<Form.Control
								required
								type="text"
								placeholder="League Name"
								// onBlur={() => {
								// formValidation.validName = true;
								// }}
							/>
							<Form.Text
							// className={
							// leagueState.name
							// ? formValidation.validName
							// ? "valid"
							// : "invalid"
							// : "text-muted"
							// }
							>
								Must be unique
							</Form.Text>
						</Form.Group>
					</Row>
					<Row>
						<Form.Group
							as={Col}
							className="mb-3"
							controlId="leagueCreateStartDate"
						>
							<Form.Label className="ms-3">Start Date</Form.Label>
							<Form.Control
								type="date"
								min={new Date()}
								placeholder="Start Date"
								onChange={event => {
									const startDate = event.target.value;
									setLeagueState({ ...leagueState, ...{ startDate } });
								}}
							/>
						</Form.Group>
						<Form.Group
							as={Col}
							className="mb-3"
							controlId="leagueCreateEndDate"
						>
							<Form.Label className="ms-3">End Date</Form.Label>
							<Form.Control type="date" placeholder="End Date" />
						</Form.Group>
						<Form.Group
							as={Col}
							className="mb-3"
							controlId="leagueCreatePassword"
						>
							<Form.Label className="ms-3">Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
					</Row>
					<Row>
						<Form.Group className="mb-3" controlId="leagueCreateRules">
							<Form.Label>Rules</Form.Label>
							<Form.Control as="textarea" rows={5} />
						</Form.Group>
					</Row>
					<div className="d-grid gap-2 mt-4">
						{loading && (
							<Button
								disabled
								size="lg"
								className="df-light-grey-text"
								variant="primary"
								type="submit"
							>
								Loading...
							</Button>
						)}
						{!loading && !success && (
							<Button
								size="lg"
								className="df-light-grey-text"
								variant="primary"
								type="submit"
							>
								Create League
							</Button>
						)}
						{success && (
							<Button
								disabled
								size="lg"
								className="df-light-grey-text"
								variant="primary"
								type="submit"
							>
								Redirecting...
							</Button>
						)}
					</div>
				</Form>
			</Row>
		</Container>
	);
}

export default LeagueCreationPage;
