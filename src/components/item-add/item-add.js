import React, {Component} from 'react';

import './item-add.css';

export default class ItemAdd extends Component {

    render() {
        return (

            <div className="add-group">

                <button type="button"
                        className="btn btn-outline-secondary btn-sm"
                        onClick={ () => this.props.onAdd('Hello App') }>

                    <i className="fa fa-plus" />
                </button>

            </div>

        );
    }
}
