import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	loading: false,
	success: false,
	league: {},
	errorMessage: null,
};

let error = "";

export const createLeague = createAsyncThunk(
	"leagues/createLeague",
	async newLeague => {
		let league;
		try {
			let response = await axios.post(
				`https://my.api.mockaroo.com/PostOneLeague.json?key=594efab0&__method=POST`,
				newLeague,
			);
			league = response.data;
		} catch (err) {
			error += ", " + err.response.data.error;
		}
		return { league, error };
	},
);

const leagueSlice = createSlice({
	name: "createLeague",
	initialState: initialState,
	extraReducers: builder => {
		builder
			.addCase(createLeague.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(createLeague.fulfilled, (state, action) => {
				state.loading = false;
				state.success = true;
				state.league = action.payload.league;
			})
			.addCase(createLeague.rejected, (state, action) => {
				state.loading = false;
				state.errorMessage = action.payload.error;
			});
	},
});

export default leagueSlice.reducer;
