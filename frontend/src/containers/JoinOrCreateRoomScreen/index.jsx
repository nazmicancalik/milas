import { connect } from 'react-redux';
import { JoinOrCreateRoomScreenComponent } from './JoinOrCreateRoomScreen';
import { LoginActions } from '../../actions/LoginActions';

function mapStateToProps(state) {
    return {
        username: state.app.username,
        roomname: state.app.roomname
    };
};

function mapDispatchToProps(dispatch) {
    return {
        setLoginState: (aLoginState) => dispatch(
            LoginActions.setLoginState(aLoginState)
        ),
        setUsername: (aUserName) => dispatch(
            LoginActions.setUsername(aUserName)
        ),
        setRoomname: (aRoomName) => dispatch(
            LoginActions.setRoomname(aRoomName)
        ),
    };
};

export const JoinOrCreateRoomScreen = connect(mapStateToProps,mapDispatchToProps)(JoinOrCreateRoomScreenComponent);