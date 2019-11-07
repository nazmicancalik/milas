import { LoginActions } from "../actions/LoginActions";

const initialState = {
    isLoggedIn: false,
    username: null,
    roomname: null
}

export function LoginReducer(state = initialState , action){
    switch (action.type) {
        case LoginActions.SET_LOGIN_STATE: {
            return {
                ...state,
                isLoggedIn: action.payload
            };
        }

        case LoginActions.SET_USERNAME: {
            return {
                ...state,
                username: action.payload
            };
        }

        case LoginActions.SET_ROOMNAME: {
            return {
                ...state,
                roomname: action.payload
            };
        }
    }
    return state;
};