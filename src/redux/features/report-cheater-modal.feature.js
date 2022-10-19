import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isOpen: false,
};

let reportCheaterModalSlice = createSlice({
	name: "reportCheaterModal",
	initialState: initialState,
	reducers: {
		openReportCheaterModal: (state, action) => {
			state.isOpen = true;
		},
		closeReportCheaterModal: (state, action) => {
			state.isOpen = false;
		},
	},
});

export const { openReportCheaterModal, closeReportCheaterModal } =
	reportCheaterModalSlice.actions;
export default reportCheaterModalSlice.reducer;
