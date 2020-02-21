import React from 'react';
import ReactDOM from  'react-dom';

import AppTime from './components/app-time';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
    return (
        <div>
            <AppTime />
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));