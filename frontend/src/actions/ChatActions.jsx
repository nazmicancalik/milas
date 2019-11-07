export class ChatActions {
    static get ADD_MESSAGE() {
        return 'ChatActions.ADD_MESSAGE';
    }

    static get CLEAR_MESSAGES() {
        return 'ChatActions.CLEAR_MESSAGES';
    }

    static addMessage(aMessage) {
        return {
            type: ChatActions.ADD_MESSAGE,
            payload: aMessage
        };
    }

    static clearMessages() {
        return {
            type: ChatActions.CLEAR_MESSAGES,
            payload: null
        };
    }
}
