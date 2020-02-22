import React from 'react';
import ReactDOM from  'react-dom';

import AppTime from './components/app-time';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ItemStatusFilter from './components/item-status-filter';
import TodoList from './components/todo-list';

import './index.css';

const App = () => {

    const todoData = [
        { id: 1, label: 'Drink Coffee', important: false },
        { id: 2, label: 'Make React Todo', important: true },
        { id: 3, label: 'Have a lunch', important: false }
    ];

    return (
        <div className="todo-app">
            <AppTime />
            <AppHeader toDo={1} done={3} />

            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={todoData} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));