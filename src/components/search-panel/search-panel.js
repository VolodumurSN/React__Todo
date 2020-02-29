import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        search: ''
    };

    onSearchChange = event => {
        const search = event.target.value.toLowerCase();
        this.setState({
            search
        });

        this.props.onSearch(search);
    };

    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   onChange={this.onSearchChange}
                   placeholder="Type here to search"
                   value={this.state.search} />
        );
    }

}
