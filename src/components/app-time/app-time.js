import React, {Component} from 'react';

import './app-time.css';

export default class AppTime extends Component {

    state = {
        time: new Date().toLocaleTimeString()
    };

    componentDidMount = () => {
        setInterval(() => this.onTick(), 1000 );
    };

    onTick = () => {
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    };

    render() {

        return (
            <span>
                {this.state.time}
            </span>
        );
    }
}
