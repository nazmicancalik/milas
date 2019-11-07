const initialState = {
    username: null,
    roomname: null,
    isLoggedIn: false
}

export function AppReducer(state = initialState , action){
    switch (action.type) {
        case "CREATE_ROOM": {
            return {
                ...state,
                username: action.payload.username,
                roomname: action.payload.roomname
            };
        }
        case "JOIN_ROOM": {
            return {
                ...state,
                username: action.payload.username,
                roomname: action.payload.roomname
            };
        }
    }
    return state;
};

