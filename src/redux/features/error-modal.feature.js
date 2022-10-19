import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isOpen: false,
};

let errorModalSlice = createSlice({
	name: "errorModal",
	initialState: initialState,
	reducers: {
		openErrorModal: (state, action) => {
			state.isOpen = true;
		},
		closeErrorModal: (state, action) => {
			state.isOpen = false;
		},
	},
});

export const { openErrorModal, closeErrorModal } = errorModalSlice.actions;
export default errorModalSlice.reducer;
