export class LoginActions {
    static get SET_LOGIN_STATE() {
        return 'LoginActions.SET_LOGIN_STATE';
    }

    static get SET_USERNAME() {
        return 'LoginActions.SET_USERNAME';
    }

    static get SET_ROOMNAME() {
        return 'LoginActions.SET_ROOMNAME';
    }

    static setLoginState(aLoginState) {
        return {
            type: LoginActions.SET_LOGIN_STATE,
            payload: aLoginState
        };
    }

    static setUsername(aUsername) {
        return {
            type: LoginActions.SET_USERNAME,
            payload: aUsername
        };
    }

    static setRoomname(aRoomname) {
        return {
            type: LoginActions.SET_ROOMNAME,
            payload: aRoomname
        };
    }
}
