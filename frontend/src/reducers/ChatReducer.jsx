import { ChatActions } from "../actions/ChatActions";

const initialState = {
    messages: []
}

export function ChatReducer(state = initialState , action){
    switch (action.type) {
        case ChatActions.ADD_MESSAGE: {
            return {
                messages: [
                    ...state.messages,
                    action.payload
                ]
            };
        }

        case ChatActions.CLEAR_MESSAGES: {
            return {
                messages: [
                    ...state.messages
                ]
            };
        }
    }
    return state;
};

