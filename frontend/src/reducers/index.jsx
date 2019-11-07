import {combineReducers} from 'redux';

import { ChatReducer } from './ChatReducer';
import { AppReducer } from './AppReducer';
import { LoginReducer } from './LoginReducer';
import { VideoReducer } from './VideoReducer';

export default combineReducers({
    chat: ChatReducer,
    app: AppReducer,
    login: LoginReducer,
    video: VideoReducer
});