import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycle extends Component {
    constructor(props) {
        super(props);

    }

    Display = () => (
        <div className="display-1">
            <h1 className="text-decoration-none">Hello</h1>
        </div>
    )

    render() {
        return (
            <div>
                {this.Display}
            </div>
        );
    }

    componentWillMount() {
        alert("[INFOR]: Ready for mounting");
    }

    componentDidMount() {
        alert("[INFOR]: Mounted");
    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

}

LifeCycle.propTypes = {

};



export default LifeCycle;