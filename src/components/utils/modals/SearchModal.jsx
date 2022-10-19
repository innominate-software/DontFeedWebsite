import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { useDispatch, useSelector } from "react-redux";
import {
	closeSearchModal,
	openSearchModal,
} from "../../../redux/features/search-modal.feature";

let SearchModal = () => {
	let dispatch = useDispatch();

	let searchModalState = useSelector(store => {
		return store["searchModal"];
	});

	let { isOpen } = searchModalState;

	const handleClose = () => {
		dispatch(closeSearchModal());
	};
	const handleSubmit = e => {
		e.preventDefault();
		dispatch(openSearchModal());
		// dispatch search results info
	};
	return (
		<React.Fragment>
			<Form className="d-flex w-100" onSubmit={handleSubmit}>
				<FormControl type="search" placeholder="Search" aria-label="Search" />
			</Form>

			<Modal
				show={isOpen}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Search Results</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					this is where we will put search results... IF WE HAD SOME
				</Modal.Body>
			</Modal>
		</React.Fragment>
	);
};
export default SearchModal;
