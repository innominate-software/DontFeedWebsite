import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

const UnderMaintenancePopup = () => {
	// State variable to control the visibility of the pop-up
	const [showPopup, setShowPopup] = useState(false);

	useEffect(() => {
		// Check if the local storage key exists
		const popupShown = localStorage.getItem('popupShown');
		if (!popupShown) {
			// If not, set the state variable to true to show the pop-up
			setShowPopup(true);
		}
	}, []);

	const handlePopupClose = () => {
		// Set the local storage key to indicate that the pop-up has been shown
		localStorage.setItem('popupShown', true);
		// Set the state variable to false to hide the pop-up
		setShowPopup(false);
	};

	return (
		// Render the pop-up component conditionally based on the state variable

		<div>
			{showPopup && (
				<Modal
					size='lg'
					show={showPopup}
					onHide={handlePopupClose}
					backdrop='static'
					keyboard={false}>
					<Modal.Header className='df-dark-background df-pink-text' closeButton>
						<Modal.Title>UNDER MAINTENANCE</Modal.Title>
					</Modal.Header>
					<Modal.Body className='df-dark-background-2 '>
						<h3 className='df-pink-text'>
							Site is currently under maintenance. Most functionality does not
							exist. This serves as an "Open Alpha" of sorts. Please be patient.
						</h3>
					</Modal.Body>
					<Modal.Footer className='df-dark-background'>
						<Button variant='primary' onClick={handlePopupClose}>
							Understood
						</Button>
					</Modal.Footer>
				</Modal>
			)}
		</div>
	);
};

export default UnderMaintenancePopup;
