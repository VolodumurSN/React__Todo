import React, {Component} from 'react';

import './item-add.css';

export default class ItemAdd extends Component {

    state = {
        label: ''
    };

    onLabelChange = event => {
        this.setState({
            label: event.target.value
        });
    };

    onSubmit = event => {
        event.preventDefault();

        this.props.onAdd(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        return (

            <form className="add-group d-flex"
                  onSubmit={this.onSubmit}>

                <input type="text"
                       className="form-control"
                       onChange={this.onLabelChange}
                       placeholder="What needs to be done"
                       value={this.state.label} /> {/* control html element */}

                <button type="submit"
                        className="btn btn-outline-secondary btn-sm">

                    <i className="fa fa-plus" />
                </button>

            </form>

        );
    }
}
