import styles from './TodoList.module.css';
import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import TodoForm from './TodoForm';

const LOCAL_STORAGE = "react-todo-list"

function TodoList() {
    // This is a todos array
    const [todos, setTodos] = useState([]);

    // << ------------------- >>
    // This is used to storage all todos, so when page is refreshed todos will stay
    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
        if (storageTodos) setTodos(storageTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE, JSON.stringify(todos));
    }, [todos]);
    // << ------------------- >>

    // Takes todo object from TodoForm and puts it in array
    function addTodo(todo) {
        setTodos([todo, ...todos]);
    }

    return (
        <div className={ styles.container }>
            <TodoForm addTodo={ addTodo } />
            <ItemList todos={ todos } />
        </div>
    );
}

export default TodoList;