import axios from "axios";

const AuthActionType = {
    REGISTER_SUCCESS: "REGISTER_SUCCESS",
    REGISTER_FAIL: "REGISTER_FAIL",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAIL: "LOGIN_FAIL",
    LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
    LOGOUT_FAIL: "LOGOUT_FAIL",
};

const RegisterAuthAction = (userState, setErrorHandler) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("auth/register", userState);
            const { data } = response;
            dispatch({
                type: AuthActionType.REGISTER_SUCCESS,
                payload: data,
            });
        } catch (error) {
            if (error.response) {
                console.log(error);
                dispatch({
                    type: AuthActionType.REGISTER_FAIL,
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

const LoginAuthAction = (loginState, setErrorHandler) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("auth/login", loginState);
            const { data } = response;
            dispatch({
                type: AuthActionType.LOGIN_SUCCESS,
                payload: data,
            });
        } catch (error) {
            if (error.response) {
                console.log(error.response);
                dispatch({
                    type: AuthActionType.LOGIN_FAIL,
                    payload: error.response.data.message,
                });
                if (error.response.status === 400)
                setErrorHandler({
                    hasError: true,
                    message: error.response.data.message,
                });
            }
        }
    };
};

const LogOutAuthAction = (userState) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("auth/logout", userState);
            const { data } = response;
            dispatch({
                type: AuthActionType.LOGOUT_SUCCESS,
                payload: data.message,
            });
        } catch (error) {
            if (error.response) {
                console.log(error);
                dispatch({
                    type: AuthActionType.LOGOUT_FAIL,
                    payload: error.response.data.message,
                });
            }
        }
    };
};

export {
    RegisterAuthAction,
    LoginAuthAction,
    LogOutAuthAction,
    AuthActionType,
};
