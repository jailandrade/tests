import React, { Component, Prototypes} from 'react';

// Task component - represents a single todo item

export default class Task extends Component {
    render() {
        return (
            <li>{this.props.task.text}</li>
        );
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired,
};