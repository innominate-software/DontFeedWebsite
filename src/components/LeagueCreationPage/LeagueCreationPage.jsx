import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { LeagueCreateAction } from "../../redux/actions/LeagueActions";
import leagueDataService from "../../services/league.service";
import { useHistory } from "react-router-dom";

function LeagueCreationPage(props) {
	const { leagueCreate, setErrorHandler } = props;
	const [leagueState, setLeagueState] = useState({});
	const [formValidation, setFormValidation] = useState({});
	const history = useHistory();
	return (
		<Container fluid className="app-container df-dark-background-2">
			<Row>
				<Col className="my-5">
					<h1 className="page-title">CREATE A LEAGUE</h1>
				</Col>
			</Row>
			<Row className="px-5">
				<Form
					onSubmit={event => {
						event.preventDefault();
						setLeagueState({
							...leagueState,
							matchFrequency:
								leagueState.matchFrequencyNumber +
								"|" +
								leagueState.matchFrequencyLetter,
						});
						leagueCreate(leagueState, history, setErrorHandler);
					}}
				>
					<Row>
						<Form.Group as={Col} className="mb-3" controlId="leagueCreateName">
							<Form.Label className="ms-3">League Name</Form.Label>
							<Form.Control
								required
								type="text"
								placeholder="League Name"
								onBlur={event => {
									const name = event.target.value;
									if (name.trim() !== "") {
										setLeagueState({ ...leagueState, ...{ name } });
										leagueDataService.existsByName(name).then(response => {
											setFormValidation({
												...formValidation,
												validName: !response.data,
											});
										});
									} else {
										setFormValidation({ ...formValidation, validName: false });
									}
								}}
							/>
							<Form.Text
								className={
									leagueState.name
										? formValidation.validName
											? "valid"
											: "invalid"
										: "text-muted"
								}
							>
								Must be unique
							</Form.Text>
						</Form.Group>
					</Row>
					<Row>
						<Form.Group as={Col} className="mb-3" controlId="leagueCreateGame">
							<Form.Label>Game</Form.Label>
							<Form.Select
								required
								onChange={event => {
									const gameName = event.target.value;
									let game;
									switch (gameName) {
										case "DOTA2":
											game = { id: 1, name: "DOTA2" };
											break;
										case "LEAGUEOFLEGENDS":
											game = { id: 2, name: "LEAGUEOFLEGENDS" };
											break;
										case "OVERWATCH":
											game = { id: 3, name: "OVERWATCH" };
											break;
										case "SMASHBROSULTIMATE":
											game = { id: 4, name: "SMASHBROSULTIMATE" };
											break;
										case "MADDEN21":
											game = { id: 5, name: "MADDEN21" };
											break;
										default:
											console.error(
												"The game is either spelled incorrectly or is not in this list",
											);
										// todo create logging for errors like this
									}
									setLeagueState({ ...leagueState, ...{ game } });
									setFormValidation({
										...formValidation,
										validGame: game !== "Choose Game",
									});
								}}
							>
								<option>Choose Game</option>
								<option value={"DOTA2"}>Dota 2</option>
								<option value={"LEAGUEOFLEGENDS"}>League of Legends</option>
								<option value={"OVERWATCH"}>Overwatch</option>
								<option value={"SMASHBROSULTIMATE"}>
									Smash Bros. Ultimate
								</option>
								<option value={"MADDEN21"}>Madden 21</option>
							</Form.Select>
						</Form.Group>
						<Form.Group
							as={Col}
							className="mb-3"
							controlId="leagueCreateFormat"
						>
							<Form.Label>League Format</Form.Label>
							<Form.Select
								onChange={event => {
									const format = event.target.value;
									const validFormat = format !== "Choose Format";
									setLeagueState({ ...leagueState, ...{ format } });
									setFormValidation({ ...formValidation, ...{ validFormat } });
								}}
							>
								<option>Choose Format</option>
								<option value={"RANDOMEVERYWEEK"}>Random Every Week</option>
								<option value={"PERFORMANCEBASED"}>Performance Based</option>
								<option value={"PREDETERMINED"}>Predetermined</option>
							</Form.Select>
						</Form.Group>
						<Form.Group
							as={Col}
							className="mb-3"
							controlId="leagueCreateMatchFrequencyMatches"
						>
							<Form.Label>Number of matches</Form.Label>
							<Form.Select
								required={true}
								onChange={event => {
									const number = event.target.value;
									setLeagueState({
										...leagueState,
										matchFrequencyNumber: number,
									});
									setFormValidation({
										...formValidation,
										validNumberOfMatches:
											number !== "Choose Match Frequency" &&
											leagueState.format !== "PREDETERMINED",
									});
								}}
								disabled={leagueState.format === "PREDETERMINED"}
							>
								<option>Choose Match Frequency</option>
								<option value={1}>1</option>
								<option value={2}>2</option>
								<option value={3}>3</option>
								<option value={4}>4</option>
								<option value={5}>5</option>
								<option value={6}>6</option>
							</Form.Select>
						</Form.Group>
						<Form.Group
							as={Col}
							className="mb-3"
							controlId="leagueCreateMatchFrequencyMatchesPer"
							onChange={event => {
								const letter = event.target.value;
								setLeagueState({
									...leagueState,
									matchFrequencyLetter: letter,
								});
								setFormValidation({
									...formValidation,
									validNumberOfMatchesPer: letter === "d" || letter === "w",
								});
							}}
						>
							<Form.Label as="legend" column sm={2}>
								per
							</Form.Label>
							<Form.Check
								inline
								type="radio"
								label="Day"
								name="leagueCreateMatchFrequencyPerRadios"
								id="leagueCreateMatchFrequencyPerDay"
								value="d"
								disabled={leagueState.format === "PREDETERMINED"}
							/>
							<Form.Check
								inline
								type="radio"
								label="Week"
								name="leagueCreateMatchFrequencyPerRadios"
								id="leagueCreateMatchFrequencyPerWeek"
								value="w"
								disabled={leagueState.format === "PREDETERMINED"}
							/>
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
									const validStartDate = new Date(startDate) > new Date();
									setLeagueState({ ...leagueState, ...{ startDate } });
									setFormValidation({
										...formValidation,
										...{ validStartDate },
									});
								}}
							/>
						</Form.Group>
						<Form.Group
							as={Col}
							className="mb-3"
							controlId="leagueCreateEndDate"
						>
							<Form.Label className="ms-3">End Date</Form.Label>
							<Form.Control
								type="date"
								placeholder="End Date"
								onChange={event => {
									const endDate = event.target.value;
									const validEndDate = endDate > leagueState.startDate;
									setLeagueState({ ...leagueState, ...{ endDate } });
									setFormValidation({ ...formValidation, ...{ validEndDate } });
								}}
							/>
						</Form.Group>
						<Form.Group
							as={Col}
							className="mb-3"
							controlId="leagueCreatePassword"
						>
							<Form.Label className="ms-3">Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								onChange={event => {
									const password = event.target.value;
									setLeagueState({ ...leagueState, ...{ password } });
								}}
							/>
						</Form.Group>
					</Row>
					<Row>
						<Form.Group className="mb-3" controlId="leagueCreateRules">
							<Form.Label>Rules</Form.Label>
							<Form.Control
								as="textarea"
								rows={5}
								onChange={event => {
									const rules = event.target.value;
									setLeagueState({ ...leagueState, ...{ rules } });
								}}
							/>
						</Form.Group>
					</Row>
					{leagueState.format === "PREDETERMINED" ? (
						formValidation.validName &&
						formValidation.validGame &&
						formValidation.validFormat &&
						formValidation.validStartDate &&
						formValidation.validEndDate ? (
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
						)
					) : formValidation.validName &&
					  formValidation.validGame &&
					  formValidation.validFormat &&
					  formValidation.validNumberOfMatches &&
					  formValidation.validNumberOfMatchesPer &&
					  formValidation.validStartDate &&
					  formValidation.validEndDate ? (
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

const mapStateToProps = state => {
	return {
		league: state,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		leagueCreate: (leagueState, history, setErrorHandler) => {
			dispatch(LeagueCreateAction(leagueState, history, setErrorHandler));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LeagueCreationPage);
