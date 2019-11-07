import { connect } from 'react-redux';
import { MainScreenComponent } from './MainScreen';
import { ChatActions } from '../../actions/ChatActions';
import { VideoActions } from '../../actions/VideoActions';

function mapStateToProps(state) {
    return {
        username: state.login.username,
        roomname: state.login.roomname,
        messages: state.chat.messages
    };
};

function mapDispatchToProps(dispatch) {
    return {
        addMessage: (aMessage) => dispatch(
            ChatActions.addMessage(aMessage)
        ),
        clearMessages: () => dispatch(
            ChatActions.clearMessages()
        ),
        changeVideo: (aURL) => dispatch(
            VideoActions.changeVideo(aURL)
        )
    };
};

export const MainScreen = connect(mapStateToProps,mapDispatchToProps)(MainScreenComponent);