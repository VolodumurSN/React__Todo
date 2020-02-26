import React, {Component} from 'react';

import AppTime from '../app-time/app-time';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAdd from '../item-add/item-add';
import TodoList from '../todo-list/todo-list';

import './app.css';

export default class App extends Component {
    state = {
        todoData: [
            { id: 1, label: 'Drink Coffee' },
            { id: 2, label: 'Make React Todo' },
            { id: 3, label: 'Have a lunch' }
        ]
    };

    render() {

        const deleteItem = (id) => {

            this.setState(({todoData}) => {

                const idx = todoData.findIndex(el => id === el.id);

                const newTodoData = [ ...todoData.slice(0, idx), ...todoData.slice(idx + 1) ];


                return {
                    todoData: newTodoData
                };
            });
        };

        return (
            <div className="todo-app">
                <AppTime />
                <AppHeader toDo={1} done={3} />

                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={ this.state.todoData }
                    onDeleted={ (id) => deleteItem(id) }/>

                <ItemAdd
                    onAdd={ (text) => console.log('Adding success', text) }/>
            </div>
        );
    }

}
