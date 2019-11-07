import { VideoActions } from "../actions/VideoActions";

const initialState = {
    videoURL: '',
    isPlaying: false
}

export function VideoReducer(state = initialState , action){
    switch (action.type) {
        case VideoActions.CHANGE_VIDEO: {
            return {
                ...state,
                videoURL: action.payload
            };
        }
    }
    return state;
};

