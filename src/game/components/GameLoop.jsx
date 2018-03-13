import React, {Component} from 'react';

import {connect} from 'react-redux';
import {actions} from '../../app/appReducer';

class GameLoop extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.props.dispatch(actions.tick());
    }


    render() {
        return <div>{this.props.children}</div>;
    }
}

export default connect(null)(GameLoop);
