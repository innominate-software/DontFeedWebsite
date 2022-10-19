import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	loading: false,
	league: {},
	errorMessage: null,
};

let error = "";

export const getLeague = createAsyncThunk("leagues/getLeague", async data => {
	let league;
	try {
		let response = await axios.get(
			`https://my.api.mockaroo.com/GetOneLeague.json?key=594efab0`,
		);
		league = response.data;
	} catch (err) {
		error += ", " + err.response.data.error;
	}

	// make call to get matches
	/*
	duration: "97:63"
	game_id: 1
	game_match_id: "0b460edb-dc62-4021-82e8-57be3dfff1eb"
	id: 2
	league_id: 29
	map: "HAVEN"
	match_date_time: "2023-03-21 21:58:04"
	players: (10) [70, 8, 89, 72, 82, 69, 51, 69, 61, 17]
	score: "25-43"
	team-b-id: 20
	team_a_id:34
	victor: "b" 
	*/

	let matches;
	try {
		let response = await axios.get(
			`https://my.api.mockaroo.com/Get100Matches.json?key=594efab0`,
		);
		matches = response.data;
		matches.forEach(match => {
			let newMatch = {
				matchId: match.id,
				map: match.map,
				victor: match.victor,
			};
		});
	} catch (err) {
		error += ", " + err.response.data.error;
	}
	console.log(matches);

	// use math to create standings

	return { league, error };
});

const leagueSlice = createSlice({
	name: "league",
	initialState: initialState,
	extraReducers: builder => {
		builder
			.addCase(getLeague.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(getLeague.fulfilled, (state, action) => {
				state.loading = false;
				state.league = action.payload.league;
			})
			.addCase(getLeague.rejected, (state, action) => {
				state.loading = false;
				state.errorMessage = action.payload.error;
			});
	},
});

export default leagueSlice.reducer;
