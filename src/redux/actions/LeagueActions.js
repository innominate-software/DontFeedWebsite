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
            leagueState = {
                ...leagueState,
                matchFrequency: leagueState.matchFrequencyNumber + "p" + leagueState.matchFrequencyLetter
            }
            console.log(leagueState)
            const response = await axios.post("leagues/createLeague", leagueState);
            const { data } = response;
            dispatch({
                type: LeagueActionType.LEAGUE_CREATE_SUCCESS,
                payload: data,
            });
            history.push(`/league/${data.id}`);
        } catch (error) {
            if (error.response) {
                console.log(error);
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

export {
    LeagueCreateAction,
    LeagueActionType,
};
