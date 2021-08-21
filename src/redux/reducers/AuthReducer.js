import axios from "axios";
import { AuthActionType } from "../actions/AuthActions";

const authState = {
    isLoggedIn: false,
    user: {
        name: "",
        expires_at: "",
        jwtToken: "",
        authorities: [],
    },
};

const getAuthState = () => {
    const auth = localStorage.getItem("auth");
    try {
        const authObj = JSON.parse(auth);
        const { expiresAt, jwtToken } = authObj.user;
        if (new Date(expiresAt) > new Date()) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
            return authObj;
        }
        return authState;
    } catch (error) {
        return authState;
    }
};

const newAuth = getAuthState();
const authReducer = (state = newAuth, action) => {
    switch (action.type) {
        case AuthActionType.REGISTER_SUCCESS:
            const newAuthState = {
                isLoggedIn: false,
                user: action.payload,
            };
            axios.defaults.headers.common[
                "Authorization"
                ] = `Bearer ${action.payload.jwtToken}`;
            localStorage.setItem("auth", newAuthState);
            return newAuthState;
        case AuthActionType.LOGIN_SUCCESS:
            const loginAuthState = {
                isLoggedIn: true,
                user: action.payload,
            };
            axios.defaults.headers.common[
                "Authorization"
                ] = `Bearer ${action.payload.jwtToken}`;
            localStorage.setItem("auth", JSON.stringify(loginAuthState));
            return loginAuthState;
        case AuthActionType.LOGOUT_SUCCESS:
            localStorage.removeItem("auth");
            return authState;
        case AuthActionType.LOGOUT_FAIL:
            localStorage.removeItem("auth");
            return authState;
        default:
            return state;
    }
};

export default authReducer;
