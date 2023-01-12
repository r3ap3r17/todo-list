import TodoItem from './TodoItem';
import styles from './TodoList.module.css';


function ItemList(props) {
    return (
        <ul className={ styles.list }>
            { props.todos.map(item =>
                <TodoItem key={ item.id } itemText={ item.text } />
            )
            }
        </ul>
    );
}

export default ItemList;