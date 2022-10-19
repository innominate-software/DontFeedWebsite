import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./modals/LoginModal";
import RegisterModal from "./modals/RegisterModal";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ErrorModal from "./modals/ErrorModal";
import { useDispatch } from "react-redux";
import { openLoginModal } from "../../redux/features/login-modal.feature";
import SearchModal from "./modals/SearchModal";

let MainNav = () => {
	let dispatch = useDispatch();
	let handleLoginModalOpen = () => {
		dispatch(openLoginModal());
	};
	return (
		<React.Fragment>
			<Navbar sticky="top" expand="lg" className="df-dark-background">
				<div className="container-fluid">
					<Navbar.Brand href="/" className="df-light-grey-text">
						DON'T FEED
					</Navbar.Brand>
					<Navbar.Toggle
						aria-controls="navbarScroll"
						className="custom-toggler"
					/>
					<Navbar.Collapse id="navbarScroll">
						<Nav className="" style={{ maxHeight: "100px" }} navbarScroll>
							<NavDropdown
								title="Teams"
								id="navbarScrollingDropdown"
								className="df-light-grey-text mx-0 mx-xl-3"
							>
								<NavDropdown.Item href="#action3">
									Create a Team
								</NavDropdown.Item>
								<NavDropdown.Item href="#action4">Your Teams</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">Team 1</NavDropdown.Item>
								<NavDropdown.Item href="#action5">Team 2</NavDropdown.Item>
								<NavDropdown.Item href="#action5">Team 3</NavDropdown.Item>
								<NavDropdown.Item href="#action5">Team 4</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown
								title="Leagues"
								id="navbarScrollingDropdown"
								className="df-light-grey-text mx-0 mx-xl-3"
							>
								<NavDropdown.Item href="#action3">
									Create a League
								</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Your Leagues
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">League 1</NavDropdown.Item>
								<NavDropdown.Item href="#action5">League 2</NavDropdown.Item>
								<NavDropdown.Item href="#action5">League 3</NavDropdown.Item>
								<NavDropdown.Item href="#action5">League 4</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown
								title="Players"
								id="navbarScrollingDropdown"
								className="df-light-grey-text mx-0 mx-xl-3"
							>
								<NavDropdown.Item href="#action3">Teammates</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									List of Players
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">Player 1</NavDropdown.Item>
								<NavDropdown.Item href="#action5">Player 2</NavDropdown.Item>
								<NavDropdown.Item href="#action5">Player 3</NavDropdown.Item>
								<NavDropdown.Item href="#action5">Player 4</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown
								title="Matches"
								id="navbarScrollingDropdown"
								className="df-light-grey-text mx-0 mx-xl-3"
							>
								<NavDropdown.Item href="#action3">
									Past Matches
								</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Upcoming Matches
								</NavDropdown.Item>
								<NavDropdown.Item href="#action5">All Matches</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown
								title="Support"
								id="navbarScrollingDropdown"
								className="df-light-grey-text mx-0 mx-xl-3"
							>
								<NavDropdown.Item href="#action3">
									Contact Suport
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<SearchModal />
						<h5 className="mx-3 my-auto df-pink-text">USERNAME</h5>
						<LoginModal />
						<Button className="btn btn-primary">Logout</Button>
						<RegisterModal />
					</Navbar.Collapse>
				</div>
			</Navbar>
			<ErrorModal />
		</React.Fragment>
	);
};

export default MainNav;
