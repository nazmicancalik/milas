import React from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import io from 'socket.io-client';

import {
    FormInput,
    Button,
    ButtonGroup,
    Slider,
    Modal,
    ModalBody,
    ModalHeader,
    ListGroup,
    ListGroupItem
} from "shards-react";
import ReactPlayer from 'react-player';


import { FaPlay, FaPause, FaSearch } from 'react-icons/fa';
import { Message } from '../../components/Message';
import constants from '../../constants';

const socket = io(constants.SOCKET_URL);

export class MainScreenComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: props.username,
            roomname: props.roomname,
            isUserListModalOpen: false,
            videoURL: null,
            messages: props.messages
        }

        this.toggleUserListModal = this.toggleUserListModal.bind(this);
        this.changeVideo = this.changeVideo.bind(this);
        this.handleAddMessage = this.handleAddMessage.bind(this);
        this.clearMessages = this.clearMessages.bind(this);
    }
    
    componentDidMount() {
        this.socket();
    }

    componentDidUpdate() {
        // scroll to bottom
        this.refs.chatbox.scrollTop = this.refs.chatbox.scrollHeight
    }

    changeVideo(event) {
        event.preventDefault();
        this.setState({
            videoURL: event.target.videoUrl.value
        });
        this.props.changeVideo(event.target.videoUrl.value)
        event.target.videoUrl.value = "";
    }

    toggleUserListModal() {
        this.setState({
            isUserListModalOpen: !this.state.isUserListModalOpen
        });
    }

    createMessage(message) {
        return <Message
            isOwn={message.isOwn}
            username={message.username}
            message={message.message}
            time={message.time} />;
    }

    createMessages(messages) {
        return messages.map(this.createMessage);
    }

    handleAddMessage(event) {
        event.preventDefault();
        let message = {
            isOwn: true,
            username: this.state.username,
            message: event.target.message.value,
            time: moment().format('HH:mm:ss').toString()
        }
        
        // Send the message with socket connection 
        socket.emit('sendMessage', message);
        
        event.target.message.value = "";
        /*this.setState({
            messages: [
                ...this.state.messages,
                message
            ]
        });*/
        this.props.addMessage(message);
    }

    clearMessages(event) {
        event.preventDefault();

        this.setState({
            messages: []
        });

        this.props.clearMessages();
    }

    socket() {
        const username = this.state.username;

        /*
        // receive userlist
        socket.on('chat users', (msg) => {
            this.props.dispatch(receiveUsers(msg));
        });

        // send join message
        socket.emit('chat join', { timestamp: new Date(), sender: username, message: 'joined' });

        // receive join message
        socket.on('chat join', (msg) => {
            this.props.dispatch(receiveMessage(msg));
        });

        // receive leave message
        socket.on('chat leave', (msg) => {
            this.props.dispatch(receiveMessage(msg));
        });
        */

        // receive message
        socket.on('sendMessage', (message) => {
            this.setState({
                messages: [
                    ...this.state.messages,
                    message
                ]
            });
            this.props.addMessage(message);
        });

        /*
        // send leave message when user leaves the page
        window.addEventListener('beforeunload', (ev) => {
            ev.preventDefault();

            socket.emit('chat leave', { timestamp: new Date(), sender: username, message: 'left' });
        });
        */
    }

    render() {
        const { isUserListModalOpen, videoURL, messages } = this.state;
        return (
            <div className="main-container">
                <div className="video-section-container">
                    <div className="video-url-container">
                        <form onSubmit={this.changeVideo} className="video-url-input-form">
                            <FormInput
                                autoComplete="off"
                                id="video-url"
                                name="videoUrl"
                                className="video-url-input"
                                placeholder="Paste video url here" />
                            <Button outline className="video-url-submit-button" type="submit">
                                Change Video
                            </Button>
                        </form>
                    </div>
                    <div className="video-container">
                        {videoURL ? 
                            (
                                <ReactPlayer
                                    className="react-player"
                                    width="100%"
                                    height="96%"
                                    url={videoURL} playing />
                            ) 
                            : 
                            (
                                <div className="video-container-placeholder">
                                    <b>Paste</b> a Youtube video url to the above <b>input</b> to open a video
                                    <br/>
                                    Video will mount here ;)
                                </div>
                            )
                        }
                    </div>
                    <div className="video-control-container">
                        <div className="video-control-button-group-container">
                            <ButtonGroup size="sm" className="mr-1">
                                <Button outline className="control-button">
                                    <FaPlay />
                                </Button>
                                <Button outline className="control-button">
                                    <FaPause />
                                </Button>
                            </ButtonGroup>
                        </div>
                        <div className="video-control-seek-slider-container">
                            <Slider theme="warning" connect={[true, false]} start={[0]} range={{ min: 0, max: 100 }} />
                        </div>
                    </div>
                </div>
                <div className="message-section-container">
                    <div className="user-list-button-container">
                        <Button outline className="user-list-button" onClick={this.toggleUserListModal}>
                            Show Users
                        </Button>
                        <Button outline className="clear-messages-button" onClick={this.clearMessages}>
                            Clear Messages
                        </Button>
                        <Modal size="sm" open={isUserListModalOpen} toggle={this.toggleUserListModal}>
                            <ModalHeader className="online-users-modal-header">Online Users</ModalHeader>
                            <ModalBody>
                                <ListGroup>
                                    <ListGroupItem>Nazmican</ListGroupItem>
                                    <ListGroupItem>Kemal</ListGroupItem>
                                    <ListGroupItem>Berk</ListGroupItem>
                                    <ListGroupItem>Çağdaş</ListGroupItem>
                                </ListGroup>
                            </ModalBody>
                        </Modal>
                    </div>
                    <div className="messages-container" ref='chatbox'>
                        {this.state.messages.length === 0 ? <div className="messages-placeholder"> Messages will appear here</div> : this.createMessages(messages)}
                    </div>
                    <div className="message-input-container">
                        <form className="message-input-form" onSubmit={this.handleAddMessage}>
                            <FormInput
                                autoComplete="off"
                                id="message"
                                name="message"
                                className="message-input"
                                placeholder="Enter your message here" />
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};

MainScreenComponent.propTypes = {
    username: PropTypes.string,
    roomname: PropTypes.string,
    messages: PropTypes.array,
    addMessage: PropTypes.func,
    clearMessages: PropTypes.func
};