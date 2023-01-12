import React, { useState } from 'react';
import uuid from 'react-uuid';
import styles from './TodoList.module.css';

function TodoForm(props) {
    // This is a todo obj that need to be added to todos array
    const [todo, setTodo] = useState([{
        id: "",
        text: ""
    }]);

    // Updates todo.text on input change
    function handleInput(e) {
        setTodo({ ...todo, text: e.target.value })
    }


    // Updates todo.id and puts todo obj in todos array using props.addTodo from TodoList
    function handleSubmit(e) {
        e.preventDefault();
        if (todo.text.trim()) {
            props.addTodo({ ...todo, id: uuid() });
            setTodo({ ...todo, text: "" });
            console.log(todo.id);
        }
    }

    return (
        <form onSubmit={ handleSubmit } className={ styles.actions } >
            <input type="text" required
                value={ todo.text }
                onChange={ handleInput } />
            <button type="submit"><i class="fa-solid fa-arrow-right"></i></button>
        </form>
    );
}

export default TodoForm;