import React from 'react';
import ReactDOM from  'react-dom';

import AppTime from './components/app-time';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {

    const todoData = [
        { id: 1, label: 'Drink Coffee', important: false },
        { id: 2, label: 'Make React Todo', important: true },
        { id: 3, label: 'Have a lunch', important: false }
    ];

    return (
        <div>
            <AppTime />
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));