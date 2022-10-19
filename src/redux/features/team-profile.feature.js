import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	loading: false,
	team: {},
	errorMessage: null,
};

let error = "";

export const getTeam = createAsyncThunk("teamProfile/getTeam", async data => {
	let team;
	try {
		let response = await axios.get(
			`https://my.api.mockaroo.com/GetOneTeam.json?key=594efab0`,
		);
		team = response.data;
	} catch (err) {
		error += ", " + err.response.data.error;
	}
	return { team, error };
});

const teamSlice = createSlice({
	name: "team",
	initialState: initialState,
	extraReducers: builder => {
		builder
			.addCase(getTeam.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(getTeam.fulfilled, (state, action) => {
				state.loading = false;
				state.team = action.payload.team;
			})
			.addCase(getTeam.rejected, (state, action) => {
				state.loading = false;
				state.errorMessage = action.payload.error;
			});
	},
});

export default teamSlice.reducer;
