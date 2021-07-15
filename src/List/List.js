import React from 'react';

import './List.css';
import Item from '../Item/Item';

const List = (props) => {

    const todosItems = props.todos.map((todo, index)=>{
        return <Item onDeleteTodo={props.onDeleteTodo} key={index} todo={todo}/>;
    });

    return (
        <div>
            <section>
                <div className="ul_container">
                    <ul>
                        { todosItems }
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default List;
