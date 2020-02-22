import React from 'react';

import AppTime from '../app-time/app-time';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import TodoList from '../todo-list/todo-list';

import './app.css';

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

export default App;