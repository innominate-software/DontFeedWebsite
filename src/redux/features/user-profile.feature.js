import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import dummyObject from "../../assets/dummydata/DummyUser.json";

const initialState = {
	loading: false,
	user: {},
	errorMessage: null,
};

let error = "";

export const getUser = createAsyncThunk("userProfile/getUser", async data => {
	let user;
	try {
		// console.log("looking for user");
		let response = await axios.get(
			`https://my.api.mockaroo.com/GetOneUser.json?key=594efab0`,
		);
		// console.log("user: ");
		// console.log(response.data);
		user = response.data;
	} catch (err) {
		console.error(err);
		error += `${err.response.data.error}, `;
	}

	if (user) {
		let teams;
		try {
			// console.log("looking for teams");
			let response = await axios.get(
				`https://my.api.mockaroo.com/GetTenTeams.json?key=594efab0`,
			);
			// console.log("teams: ");
			// console.log(response.data);
			teams = response.data;

			let newTeams = {
				activeTeams: [],
				previousTeams: [],
			};
			let dateJoined = new Date("2021-11-11");
			let dateLeft = new Date("2022-1-1");
			for (let i = 0; i < teams.length; i++) {
				let isEven = i % 2 === 0;
				let team = teams[i];
				if (isEven) {
					newTeams.activeTeams.push({
						id: team.id,
						logoPath: team.logo_file_path,
						name: team.name,
						dateJoined: `${dateJoined.getFullYear()}-${
							dateJoined.getMonth() + 1
						}-${dateJoined.getDate()}`,
					});
					continue;
				}
				newTeams.previousTeams.push({
					id: team.id,
					logoPath: team.logo_file_path,
					name: team.name,
					dateJoined: `${dateJoined.getFullYear()}-${
						dateJoined.getMonth() + 1
					}-${dateJoined.getDate()}`,
					dateLeft: `${dateLeft.getFullYear()}-${
						dateLeft.getMonth() + 1
					}-${dateLeft.getDate()}`,
				});
			}
			user = {
				...user,
				teams: newTeams,
			};
		} catch (err) {
			console.error(err);
			error += `${err.response.data.error}, `;
		}

		let leagues;
		let numberOfActiveLeagues = 0;
		let numberOfFirstPlaceTrophies = 0;
		try {
			// console.log("looking for leagues");
			let response = await axios.get(
				`https://my.api.mockaroo.com/GetTenLeagues.json?key=594efab0`,
			);
			// console.log("leagues: ");
			// console.log(response.data);
			leagues = response.data;
			let newLeagues = [];
			for (let i = 0; i < leagues.length; i++) {
				let placement = Math.floor(Math.random() * 10) + 1;
				placement === 1 && numberOfFirstPlaceTrophies++;
				if (leagues[i].stage === "ONGOING") {
					numberOfActiveLeagues++;
				}
				switch (placement) {
					case 1:
						placement = `${placement}st`;
						break;
					case 2:
						placement = `${placement}nd`;
						break;
					default:
						placement = `${placement}th`;
						break;
				}
				newLeagues.push({
					id: leagues[i].id,
					game: "Valorant",
					name: leagues[i].name,
					season: leagues[i].season,
					dates: `${new Date(
						leagues[i].start_date,
					).toDateString()} - ${new Date(leagues[i].end_date).toDateString()}`,
					stage: leagues[i].stage,
					team: teams[i].name,
					placement,
					winLossDraw: `${Math.floor(Math.random() * 10) + 1}/${
						Math.floor(Math.random() * 10) + 1
					}/${Math.floor(Math.random() * 10) + 1}`,
				});
			}
			user = {
				...user,
				leagues: newLeagues,
				numberOfActiveLeagues,
				numberOfFirstPlaceTrophies,
			};
		} catch (err) {
			console.error(err);
			error += `${err.response.data.error}, `;
		}

		try {
			// console.log("looking for matches");
			let response = await axios.get(
				`https://my.api.mockaroo.com/GetTenMatches.json?key=594efab0`,
			);
			// console.log("matches: ");
			// console.log(response.data);
			let matches = response.data;
			let newMatches = [];
			for (let i = 0; i < matches.length; i++) {
				newMatches.push({
					id: matches[i].id,
					game: "Valorant",
					event: leagues[i].name,
					homeTeam: teams[i].name,
					awayTeam: i === teams.length - 1 ? teams[0].name : teams[i + 1].name,
					map: matches[i].map,
					result: matches[i].victor === "a" ? "WON" : "LOSS",
					score: matches[i].score,
					date: matches[i].match_date_time,
				});
			}
			user = {
				...user,
				matches: newMatches,
			};
		} catch (err) {
			console.error(err);
			error += `${err.response.data.error}`;
		}
	}
	// if (!user) {
	// 	user = dummyObject.user;
	// }
	// console.log(user);
	return { user, error };
});

const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	extraReducers: builder => {
		builder
			.addCase(getUser.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(getUser.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload.user;
			})
			.addCase(getUser.rejected, (state, action) => {
				state.loading = false;
				state.errorMessage = action.error.message;
			});
	},
});

export default userSlice.reducer;
