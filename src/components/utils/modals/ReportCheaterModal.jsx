import React from "react";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import {
	closeReportCheaterModal,
	openReportCheaterModal,
} from "../../../redux/features/report-cheater-modal.feature";

let ReportCheaterModal = () => {
	let dispatch = useDispatch();

	let reportCheaterModalState = useSelector(store => {
		return store["reportCheaterModal"];
	});

	let { isOpen } = reportCheaterModalState;

	const handleClose = () => {
		dispatch(closeReportCheaterModal());
	};
	const handleShow = () => {
		dispatch(openReportCheaterModal());
	};
	return (
		<React.Fragment>
			<Col>
				<Card
					onClick={handleShow}
					className="text-center df-dark-background df-light-grey-text my-5"
				>
					<Card.Body>
						<Card.Title>Report Cheater</Card.Title>
					</Card.Body>
				</Card>
			</Col>

			<Modal show={isOpen} onHide={handleClose} className="df-light-grey-text">
				<Modal.Header closeButton className="df-dark-background">
					<Modal.Title>Report Cheater</Modal.Title>
				</Modal.Header>
				<Modal.Body className="df-dark-background">
					<p>GONNA FIGURE THIS OUT LATER</p>
					<p>GONNA FIGURE THIS OUT LATER</p>
					<p>GONNA FIGURE THIS OUT LATER</p>
					<p>GONNA FIGURE THIS OUT LATER</p>
					<p>GONNA FIGURE THIS OUT LATER</p>
					<p>GONNA FIGURE THIS OUT LATER</p>
					<p>GONNA FIGURE THIS OUT LATER</p>
					<p>GONNA FIGURE THIS OUT LATER</p>
					<p>GONNA FIGURE THIS OUT LATER</p>
					<p>GONNA FIGURE THIS OUT LATER</p>
					<p>GONNA FIGURE THIS OUT LATER</p>
					<p>GONNA FIGURE THIS OUT LATER</p>
				</Modal.Body>
			</Modal>
		</React.Fragment>
	);
};

export default ReportCheaterModal;
