import React from 'react';

import './Item.css';

const Item = (props) => {

    const deleteTodo = () => {
        props.onDeleteTodo(props.todo);
    };

    return (
        <li key={ props.todo.id }>
            <div className="item_container">
                <p className="description">
                    { props.todo.todo }
                </p>
                <button onClick={deleteTodo} className="delete">X</button>
            </div>

        </li>
    );
};

export default Item;
