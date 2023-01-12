import React from 'react';
import styles from './MainPage.module.css';
import TodoList from './TodoList';

function MainPage() {

    return (
        <section className={ styles.main }>
            <TodoList />
        </section>
    );
}

export default MainPage;