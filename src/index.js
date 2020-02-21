import React from 'react';
import ReactDOM from  'react-dom';

const AppTime = () => {
    return <span>{ (new Date()).toLocaleTimeString() }</span>;
};

const AppHeader = () => {
    return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
    const searchText = 'Type here to search';

    return <input placeholder={searchText} />;
};

const TodoList = () => {
    const listItem = ['learn React', 'Build awesom app'];

    return (
        <ul>
            <li>{ listItem[0] }</li>
            <li>{ listItem[1] }</li>
        </ul>
    );
};

const App = () => {
    return (
        <div>
            <AppTime/>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));