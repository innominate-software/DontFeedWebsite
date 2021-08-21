import { LeagueActionType } from "../actions/LeagueActions";

const leagueState = {
    league: {},
};

const getLeagueState = () => {
    const league = localStorage.getItem("league");
    return JSON.parse(league);
};

const newLeague = getLeagueState();
const leagueReducer = (state = newLeague, action) => {
    switch (action.type) {
        case LeagueActionType.LEAGUE_CREATE_SUCCESS:
            const newLeagueState = {
                league: action.payload,
            };
            localStorage.setItem("league", JSON.stringify(newLeagueState));
            return newLeagueState;
        case LeagueActionType.LEAGUE_CREATE_FAIL:
            // TODO handle error with league creation
            return leagueState;
        case LeagueActionType.LEAGUE_READ_SUCCESS:
            const readLeagueState = {
                league: action.payload,
            };
            localStorage.setItem("league", JSON.stringify(readLeagueState));
            return readLeagueState;
        case LeagueActionType.LEAGUE_READ_FAIL:
            // TODO handle error with league read
            return leagueState;
        case LeagueActionType.LEAGUE_UPDATE_SUCCESS:
            const updateLeagueState = {
                league: action.payload,
            };
            localStorage.setItem("league", JSON.stringify(updateLeagueState));
            return updateLeagueState;
        case LeagueActionType.LEAGUE_UPDATE_FAIL:
            // TODO handle error with league update
            return leagueState;
        case LeagueActionType.LEAGUE_DELETE_SUCCESS:
            const deleteLeagueState = {
                league: action.payload,
            };
            localStorage.setItem("league", JSON.stringify(deleteLeagueState));
            return deleteLeagueState;
        case LeagueActionType.LEAGUE_DELETE_FAIL:
            // TODO handle error with league delete
            return leagueState;
        default:
            return leagueState;
    }
};

export default leagueReducer;
