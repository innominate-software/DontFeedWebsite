import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import LoginModal from "./LoginModal";
import { connect } from "react-redux";
import { LogOutAuthAction } from "../../redux/actions/AuthActions";
import RegisterModal from "./RegisterModal";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function MainNav(props) {
	const { auth, logout } = props;
	const history = useHistory();
	const [loginModalShow, setLoginModalShow] = useState(false);
	const [registerModalShow, setRegisterModalShow] = useState(false);
	// const [searchModalShow, setSearchModalShow] = useState(false);

	// todo: create cleanForms functionality!!!
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
								<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Leagues" id="navbarScrollingDropdown"
										 className="df-light-grey-text mx-0 mx-xl-3">
								<NavDropdown.Item href="#action3">poop</NavDropdown.Item>
								<NavDropdown.Item href="#action4">Another poop</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">Something poop here</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Players" id="navbarScrollingDropdown"
										 className="df-light-grey-text mx-0 mx-xl-3">
								<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Matches" id="navbarScrollingDropdown"
										 className="df-light-grey-text mx-0 mx-xl-3">
								<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Support" id="navbarScrollingDropdown"
										 className="df-light-grey-text mx-0 mx-xl-3">
								<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
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
			<LoginModal show={loginModalShow} setShow={setLoginModalShow} setRegisterShow={setRegisterModalShow} />
			<RegisterModal show={registerModalShow} setShow={setRegisterModalShow} setLoginShow={setLoginModalShow} />
		{/*	TODO create Error Modal plus error functionality*/}
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