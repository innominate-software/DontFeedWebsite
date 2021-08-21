import React from "react";

function LoginCard(props) {
	return (
		<div className="card login-card df-pink-background">
			<div className="card-body">
				<h2>You are not logged in!</h2>
				<p>Membership is completely free</p>
				<button type="button" className="btn btn-primary btn-lg me-5" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
				<button type="button" className="btn btn-secondary btn-lg ms-5" data-bs-toggle="modal" data-bs-target="#registerModal">Sign up</button>
			</div>
		</div>
	)
}

export default LoginCard;