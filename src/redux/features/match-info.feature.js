import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	loading: false,
	match: {},
	errorMessage: null,
};

let error = "";

export const getMatch = createAsyncThunk("matchInfo/getMatch", async data => {
	let match;
	try {
		let response = await axios.get(
			`https://my.api.mockaroo.com/GetOneMatch.json?key=594efab0`,
		);
		match = response.data;
	} catch (err) {
		error += ", " + err.response.data.error;
	}

	if (match) {
		let teamA;
		let teamB;
		try {
			let response = await axios.get(
				`https://my.api.mockaroo.com/GetOneLeague.json?key=594efab0`,
			);
			let league = response.data;
			match = {
				...match,
				league: {
					id: league.id,
					name: league.name,
				},
			};
		} catch (err) {
			error += ", " + err.response.data.error;
		}

		try {
			let response = await axios.get(
				`https://my.api.mockaroo.com/GetTwoTeams.json?key=594efab0`,
			);
			const teams = response.data;
			teamA = {
				id: match.team_a_id,
				logo: teams[0].logo_file_path,
				name: teams[0].name,
			};
			teamB = {
				id: match.team_b_id,
				logo: teams[1].logo_file_path,
				name: teams[1].name,
			};
		} catch (err) {
			error += ", " + err.response.data.error;
		}

		try {
			let response = await axios.get(
				`https://my.api.mockaroo.com/GetTenUsers.json?key=594efab0`,
			);
			const players = response.data;
			teamA = {
				...teamA,
				players: [
					{
						id: match.players[0],
						username: players[0].username,
						profilePic: players[0].profile_pic_file_path,
					},
					{
						id: match.players[1],
						username: players[1].username,
						profilePic: players[1].profile_pic_file_path,
					},
					{
						id: match.players[2],
						username: players[2].username,
						profilePic: players[2].profile_pic_file_path,
					},
					{
						id: match.players[3],
						username: players[3].username,
						profilePic: players[3].profile_pic_file_path,
					},
					{
						id: match.players[4],
						username: players[4].username,
						profilePic: players[4].profile_pic_file_path,
					},
				],
			};
			teamB = {
				...teamB,
				players: [
					{
						id: match.players[5],
						username: players[5].username,
						profilePic: players[5].profile_pic_file_path,
					},
					{
						id: match.players[6],
						username: players[6].username,
						profilePic: players[6].profile_pic_file_path,
					},
					{
						id: match.players[7],
						username: players[7].username,
						profilePic: players[7].profile_pic_file_path,
					},
					{
						id: match.players[8],
						username: players[8].username,
						profilePic: players[8].profile_pic_file_path,
					},
					{
						id: match.players[9],
						username: players[9].username,
						profilePic: players[9].profile_pic_file_path,
					},
				],
			};
		} catch (err) {
			error = +", " + err.response.data.error;
		}
		match = {
			...match,
			game: "Valorant",
			teamA,
			teamB,
		};
	}
	return { match, error };
});

const matchSlice = createSlice({
	name: "match",
	initialState: initialState,
	extraReducers: builder => {
		builder
			.addCase(getMatch.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(getMatch.fulfilled, (state, action) => {
				state.loading = false;
				state.match = action.payload.match;
			})
			.addCase(getMatch.rejected, (state, action) => {
				state.loading = false;
				state.errorMessage = action.payload.error;
			});
	},
});

export default matchSlice.reducer;
