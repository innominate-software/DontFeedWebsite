import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import LoginModal from "./modals/LoginModal";
import { connect } from "react-redux";
import { LogOutAuthAction } from "../../redux/actions/AuthActions";
import RegisterModal from "./modals/RegisterModal";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ErrorModal from "./modals/ErrorModal";

function MainNav(props) {
	const { auth, logout, errorHandler, setErrorHandler } = props;
	const history = useHistory();
	const [loginModalShow, setLoginModalShow] = useState(false);
	const [registerModalShow, setRegisterModalShow] = useState(false);
	const [errorModalShow, setErrorModalShow] = useState(false);
	// const [searchModalShow, setSearchModalShow] = useState(false);

	return (
		<React.Fragment>
			<Navbar sticky="top" expand="lg" className="df-dark-background">
				<div className="container-fluid">
					<Navbar.Brand href="/" className="df-light-grey-text">DON'T FEED</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" className="custom-toggler" />
					<Navbar.Collapse id="navbarScroll">
						<Nav className="" style={{ maxHeight: '100px' }} navbarScroll>
							<NavDropdown title="Teams" id="navbarScrollingDropdown"
										 className="df-light-grey-text mx-0 mx-xl-3">
								<NavDropdown.Item href="#action3">Create a Team</NavDropdown.Item>
								<NavDropdown.Item href="#action4">Your Teams</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">Team 1</NavDropdown.Item>
								<NavDropdown.Item href="#action5">Team 2</NavDropdown.Item>
								<NavDropdown.Item href="#action5">Team 3</NavDropdown.Item>
								<NavDropdown.Item href="#action5">Team 4</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Leagues" id="navbarScrollingDropdown"
										 className="df-light-grey-text mx-0 mx-xl-3">
								<NavDropdown.Item href="#action3">Create a League</NavDropdown.Item>
								<NavDropdown.Item href="#action4">Your Leagues</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">League 1</NavDropdown.Item>
								<NavDropdown.Item href="#action5">League 2</NavDropdown.Item>
								<NavDropdown.Item href="#action5">League 3</NavDropdown.Item>
								<NavDropdown.Item href="#action5">League 4</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Players" id="navbarScrollingDropdown"
										 className="df-light-grey-text mx-0 mx-xl-3">
								<NavDropdown.Item href="#action3">Teammates</NavDropdown.Item>
								<NavDropdown.Item href="#action4">List of Players</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">Player 1</NavDropdown.Item>
								<NavDropdown.Item href="#action5">Player 2</NavDropdown.Item>
								<NavDropdown.Item href="#action5">Player 3</NavDropdown.Item>
								<NavDropdown.Item href="#action5">Player 4</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Matches" id="navbarScrollingDropdown"
										 className="df-light-grey-text mx-0 mx-xl-3">
								<NavDropdown.Item href="#action3">Past Matches</NavDropdown.Item>
								<NavDropdown.Item href="#action4">Upcoming Matches</NavDropdown.Item>
								<NavDropdown.Item href="#action5">All Matches</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Support" id="navbarScrollingDropdown"
										 className="df-light-grey-text mx-0 mx-xl-3">
								<NavDropdown.Item href="#action3">Contact Suport</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Form className="d-flex w-100">
							<FormControl type="search" placeholder="Search" aria-label="Search" />
							{auth.isLoggedIn ?
								<h5 className="mx-3 my-auto df-pink-text"><Link to={`/user/${auth.user.id}`}
																		  className="df-pink-text text-decoration-none">{auth.user.username}</Link>
								</h5>
								:
								<Button className="btn btn-primary mx-2"
										onClick={() => setLoginModalShow(true)}>Login</Button>
							}
							{auth.isLoggedIn ?
								<Button className="btn btn-primary" onClick={() => {
									logout(auth, history)
								}}>Logout</Button>
								:
								<Button className="btn btn-primary"
										onClick={() => setRegisterModalShow(true)}>Signup</Button>
							}
						</Form>
					</Navbar.Collapse>
				</div>
			</Navbar>
			<LoginModal show={loginModalShow} setShow={setLoginModalShow} setRegisterShow={setRegisterModalShow} setErrorHandler={setErrorHandler} />
			<RegisterModal show={registerModalShow} setShow={setRegisterModalShow} setLoginShow={setLoginModalShow} setErrorHandler={setErrorHandler} />
			{/*todo search modal*/}
			<ErrorModal show={errorModalShow} setShow={setErrorModalShow} setLoginShow={setLoginModalShow} setRegisterShow={setRegisterModalShow} errorHandler={errorHandler} setErrorHandler={setErrorHandler} />
		</React.Fragment>
	);
}

const mapStateToProps = (state) => {
	return {
		auth: state.authState,
		user: state.user,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		logout: (userState, history) => {
			dispatch(LogOutAuthAction(userState, history));
		},
		
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);