import React, {Component} from 'react';

import AppTime from '../app-time/app-time';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAdd from '../item-add/item-add';
import TodoList from '../todo-list/todo-list';

import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make React Todo'),
            this.createTodoItem('Have a lunch')
        ]
    };

    createTodoItem(label) {
        return {
            id: ++this.maxId,
            label,
            important: false,
            done: false
        };
    }

    deleteItem = (id) => {

        this.setState(({ todoData }) => {

            const idx = todoData.findIndex(el => id === el.id);

            const newTodoData = [ ...todoData.slice(0, idx), ...todoData.slice(idx + 1) ];


            return {
                todoData: newTodoData
            };
        });
    };

    addItem = (text) => {

        const addedItem = this.createTodoItem(text);

        this.setState(({ todoData }) => {

            const updatedTodoData = [ ...todoData.slice(), addedItem ];

            return {
                todoData: updatedTodoData
            };
        });
    };

    toggleProperty = (arr, id, propName) => {
        // 1. Update object
        const idx = arr.findIndex(el => id === el.id);

        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };

        // 2. Construct new Array
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {

            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    render() {

        const { todoData } = this.state;

        const doneCount = todoData.filter(el => el.done).length;

        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppTime />
                <AppHeader toDo={todoCount} done={doneCount} />

                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={ todoData }
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone } />

                <ItemAdd
                    onAdd={ this.addItem } />
            </div>
        );
    }

}
