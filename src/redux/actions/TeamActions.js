import axios from "axios";

const TeamActionType = {
    TEAM_CREATE_SUCCESS: "TEAM_CREATE_SUCCESS",
    TEAM_CREATE_FAIL: "TEAM_CREATE_FAIL",
    TEAM_READ_SUCCESS: "TEAM_READ_SUCCESS",
    TEAM_READ_FAIL: "TEAM_READ_FAIL",
    TEAM_UPDATE_SUCCESS: "TEAM_UPDATE_SUCCESS",
    TEAM_UPDATE_FAIL: "TEAM_UPDATE_FAIL",
    TEAM_DELETE_SUCCESS: "TEAM_DELETE_SUCCESS",
    TEAM_DELETE_FAIL: "TEAM_DELETE_FAIL",

};

const TeamCreateAction = (teamState, history, setErrorHandler) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("teams/createTeam", teamState);
            const { data } = response;
            dispatch({
                type: TeamActionType.TEAM_CREATE_SUCCESS,
                payload: data,
            });
            history.push(`/team/${data.id}`);
        } catch (error) {
            if (error.response) {
                console.log(error);
                dispatch({
                    type: TeamActionType.TEAM_CREATE_FAIL,
                    payload: error.response.data.message,
                });
                setErrorHandler({
                    hasError: true,
                    message: error.response.data.message,
                });
            }
        }
    };
};

export {
    TeamCreateAction,
    TeamActionType,
};
