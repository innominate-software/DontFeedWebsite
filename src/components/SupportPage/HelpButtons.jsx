import React from "react";
import Row from "react-bootstrap/Row";
import ReportCheaterModal from "../utils/modals/ReportCheaterModal";
import SubmitFeedbackModal from "../utils/modals/SubmitFeedbackModal";
import ChangePasswordModal from "../utils/modals/ChangePasswordModal";

export default function HelpButtons(props) {
	return (
		<Row>
			<SubmitFeedbackModal />
			<ReportCheaterModal />
			{/* TODO: make disabled if not logged in */}
			<ChangePasswordModal />
		</Row>
	);
}
