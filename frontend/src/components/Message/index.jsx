import React from 'react';
import PropTypes from 'prop-types';
import { Initial } from 'react-initial';
import { FaRegIdBadge } from 'react-icons/fa';

export class Message extends React.PureComponent {
    /**
     * Renders the component.
     * @returns {Node} The rendered component.
     */
    render() {
        return (
            <div className={this.props.isOwn ? 'own-message' : 'other-message'}>
                <div className="username">
                    <Initial
                        className="initial background-tint"
                        name={this.props.username}
                        charCount={2}
                        height={'3em'}
                        width={'3em'}
                        seed={1234}
                        fontSize={'1em'} />
                </div>
                <div className="message-body">
                    <div className="message-text">
                        {this.props.message}
                    </div>

                    <div className="time-container">
                        <div className="message-time">{this.props.time}</div>
                    </div>
                </div>
            </div>
        );
    }
}

/**
 * The default properties for DraegerTextField.
 */
Message.defaultProps = {
    isOwn: false,
    username: 'Unknown',
    message: 'Hello message body',
    // time: moment().format('HH:mm:ss').toString()
};

/**
 * The property types for the DraegerTextField component.
 */
Message.propTypes = {
    isOwn: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
};
