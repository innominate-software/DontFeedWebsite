import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isOpen: false,
};

let searchModalSlice = createSlice({
	name: "searchModal",
	initialState: initialState,
	reducers: {
		openSearchModal: (state, action) => {
			state.isOpen = true;
		},
		closeSearchModal: (state, action) => {
			state.isOpen = false;
		},
	},
});

export const { openSearchModal, closeSearchModal } = searchModalSlice.actions;
export default searchModalSlice.reducer;
