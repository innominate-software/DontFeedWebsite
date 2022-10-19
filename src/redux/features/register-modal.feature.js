import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isOpen: false,
};

let registerModalSlice = createSlice({
	name: "registerModal",
	initialState: initialState,
	reducers: {
		openRegisterModal: (state, action) => {
			state.isOpen = true;
		},
		closeRegisterModal: (state, action) => {
			state.isOpen = false;
		},
	},
});

export const { openRegisterModal, closeRegisterModal } =
	registerModalSlice.actions;
export default registerModalSlice.reducer;
