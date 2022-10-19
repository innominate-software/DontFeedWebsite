import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isOpen: false,
};

let changePasswordModalSlice = createSlice({
	name: "changePasswordModal",
	initialState: initialState,
	reducers: {
		openChangePasswordModal: (state, action) => {
			state.isOpen = true;
		},
		closeChangePasswordModal: (state, action) => {
			state.isOpen = false;
		},
	},
});

export const { openChangePasswordModal, closeChangePasswordModal } =
	changePasswordModalSlice.actions;
export default changePasswordModalSlice.reducer;
