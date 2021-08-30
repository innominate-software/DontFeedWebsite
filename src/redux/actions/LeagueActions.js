import axios from "axios";

const LeagueActionType = {
    LEAGUE_CREATE_SUCCESS: "LEAGUE_CREATE_SUCCESS",
    LEAGUE_CREATE_FAIL: "LEAGUE_CREATE_FAIL",
    LEAGUE_READ_SUCCESS: "LEAGUE_READ_SUCCESS",
    LEAGUE_READ_FAIL: "LEAGUE_READ_FAIL",
    LEAGUE_UPDATE_SUCCESS: "LEAGUE_UPDATE_SUCCESS",
    LEAGUE_UPDATE_FAIL: "LEAGUE_UPDATE_FAIL",
    LEAGUE_DELETE_SUCCESS: "LEAGUE_DELETE_SUCCESS",
    LEAGUE_DELETE_FAIL: "LEAGUE_DELETE_FAIL",

};

const LeagueCreateAction = (leagueState, history, setErrorHandler) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("leagues/createLeague", leagueState);
            const { data } = response;
            dispatch({
                type: LeagueActionType.LEAGUE_CREATE_SUCCESS,
                payload: data,
            });
            history.push(`/league/${data.id}`);
        } catch (error) {
            if (error.response) {
                dispatch({
                    type: LeagueActionType.LEAGUE_CREATE_FAIL,
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

const LeagueReadAction = (id, setErrorHandler) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`leagues/${id}`);
            const { data } = response;
            console.log(data)
            dispatch({
                type: LeagueActionType.LEAGUE_READ_SUCCESS,
                payload: data,
            });
        } catch (error) {
            if (error.response) {
                console.error(error)
                dispatch({
                    type: LeagueActionType.LEAGUE_READ_FAIL,
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
    LeagueCreateAction,
    LeagueReadAction,
    LeagueActionType,
};
