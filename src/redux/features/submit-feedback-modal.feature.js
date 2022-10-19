import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	isOpen: false,
};

let submitFeedbackModalSlice = createSlice({
	name: "submitFeedbackModal",
	initialState: initialState,
	reducers: {
		openSubmitFeedbackModal: (state, action) => {
			state.isOpen = true;
		},
		closeSubmitFeedbackModal: (state, action) => {
			state.isOpen = false;
		},
	},
});

export const { openSubmitFeedbackModal, closeSubmitFeedbackModal } =
	submitFeedbackModalSlice.actions;
export default submitFeedbackModalSlice.reducer;
