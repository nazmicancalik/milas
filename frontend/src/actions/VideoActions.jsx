export class VideoActions {
    static get CHANGE_VIDEO() {
        return 'VideoActions.CHANGE_VIDEO';
    }

    static changeVideo(aURL) {
        return {
            type: VideoActions.CHANGE_VIDEO,
            payload: aURL
        };
    }
}
