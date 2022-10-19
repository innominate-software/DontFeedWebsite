import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isOpen: false,
};

let loginModalSlice = createSlice({
	name: "loginModal",
	initialState: initialState,
	reducers: {
		openLoginModal: (state, action) => {
			state.isOpen = true;
		},
		closeLoginModal: (state, action) => {
			state.isOpen = false;
		},
	},
});

export const { openLoginModal, closeLoginModal } = loginModalSlice.actions;
export default loginModalSlice.reducer;
