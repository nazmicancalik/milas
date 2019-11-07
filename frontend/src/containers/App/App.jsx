import React from 'react';
import PropTypes from 'prop-types';

import { JoinOrCreateRoomScreen } from '../JoinOrCreateRoomScreen';
import { MainScreen } from '../MainScreen';

import {
    Container
} from "shards-react";


export class AppComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: this.props.isLoggedIn
        }
    }

    render() {
        return (
            <div className="application">
                {this.props.isLoggedIn ? (<MainScreen />) : (<JoinOrCreateRoomScreen />)}
            </div>
        );
    };
};

AppComponent.propTypes = {
    isLoggedIn: PropTypes.bool
};