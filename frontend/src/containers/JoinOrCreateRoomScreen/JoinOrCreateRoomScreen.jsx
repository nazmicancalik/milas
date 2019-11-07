import React from 'react';
import PropTypes from 'prop-types';

import {
    FormInput,
    Form,
    FormGroup,
    Card,
    CardBody,
    Button,
    CardFooter,
    CardHeader,
    Fade,
} from "shards-react";

export class JoinOrCreateRoomScreenComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: props.username,
            roomname: props.roomname
        }

        this.handleClickLogin = this.handleClickLogin.bind(this);
    }

    handleClickLogin(event){
        // First check if true
        event.preventDefault();
        console.log(event.target);
        this.props.setUsername(event.target.username.value);
        this.props.setRoomname(event.target.roomname.value);
        this.props.setLoginState(true);
    }

    render() {
        return (
            <div className="login-screen-container overlay">
                <div className="login-card-container">
                    <Card className="login-card">
                        <CardHeader className="login-card-header">
                            campfire
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={this.handleClickLogin}>
                                <FormGroup className="login-form-group">
                                    <FormInput autoComplete="off" id="username" name="username" className="input" placeholder="Username"/>
                                </FormGroup>
                                <FormGroup className="login-form-group">
                                    <FormInput autoComplete="off" id="roomname" name="roomname" className="input" placeholder="Room Name"/>
                                </FormGroup>
                                <CardFooter className="login-card-footer">
                                    <Button type="submit" className="login-button"  outline>
                                        Log in
                                    </Button>
                                </CardFooter>
                            </Form>
                        </CardBody>
                    </Card>
                </div>
                <div className="info-container">
                    <Fade>
                        Campfire is a platform where you can watch youtube videos synchoronously with your friends.
                        <br/>
                        Create a room, invite your friends and
                        <br/>
                        Enjoy... 
                    </Fade>
                </div>
            </div>
        );
    };
};

JoinOrCreateRoomScreenComponent.propTypes = {
    username: PropTypes.string,
    roomname: PropTypes.string,
    setLoginState: PropTypes.func.isRequired,
    setUserName: PropTypes.func.isRequired,
    setRoomName: PropTypes.func.isRequired,
};