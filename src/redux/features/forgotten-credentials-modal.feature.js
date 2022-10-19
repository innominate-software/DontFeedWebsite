import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isOpen: false,
};

let forgottenCredentialsModalSlice = createSlice({
	name: "forgottenCredentialsModal",
	initialState: initialState,
	reducers: {
		openForgottenCredentialsModal: (state, action) => {
			state.isOpen = true;
		},
		closeForgottenCredentialsModal: (state, action) => {
			state.isOpen = false;
		},
	},
});

export const { openForgottenCredentialsModal, closeForgottenCredentialsModal } =
	forgottenCredentialsModalSlice.actions;
export default forgottenCredentialsModalSlice.reducer;
