import { TeamActionType } from "../actions/TeamActions";

const teamState = {
    team: {},
};

const getTeamState = () => {
    const team = localStorage.getItem("team");
    return JSON.parse(team);
};

const newTeam = getTeamState();
const teamReducer = (state = newTeam, action) => {
    switch (action.type) {
        case TeamActionType.TEAM_CREATE_SUCCESS:
            const newTeamState = {
                team: action.payload,
            };
            localStorage.setItem("team", JSON.stringify(newTeamState));
            return newTeamState;
        case TeamActionType.TEAM_CREATE_FAIL:
            // TODO handle error with team creation
            return teamState;
        case TeamActionType.TEAM_READ_SUCCESS:
            const readTeamState = {
                team: action.payload,
            };
            localStorage.setItem("team", JSON.stringify(readTeamState));
            return readTeamState;
        case TeamActionType.TEAM_READ_FAIL:
            // TODO handle error with team read
            return teamState;
        case TeamActionType.TEAM_UPDATE_SUCCESS:
            const updateTeamState = {
                team: action.payload,
            };
            localStorage.setItem("team", JSON.stringify(updateTeamState));
            return updateTeamState;
        case TeamActionType.TEAM_UPDATE_FAIL:
            // TODO handle error with team update
            return teamState;
        case TeamActionType.TEAM_DELETE_SUCCESS:
            const deleteTeamState = {
                team: action.payload,
            };
            localStorage.setItem("team", JSON.stringify(deleteTeamState));
            return deleteTeamState;
        case TeamActionType.TEAM_DELETE_FAIL:
            // TODO handle error with team delete
            return teamState;
        default:
            return teamState;
    }
};

export default teamReducer;
