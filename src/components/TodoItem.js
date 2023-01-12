import React, { useState } from 'react';
import styles from './TodoList.module.css';

function TodoItem(props) {
    const [complete, setComplete] = useState(false);

    // Used to check or uncheck todoItem text based on complete boolean
    function handleComplete() {
        setComplete(!complete)
    }

    return (
        <li onClick={ handleComplete } className={ styles.item }>
            <p className={ complete ? styles.completed : '' }>{ props.itemText }</p>
            <button><i className="fa-solid fa-xmark"></i></button>
        </li>
    );
}

export default TodoItem;
