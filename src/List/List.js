import React from 'react';

import './List.css';
import Item from '../Item/Item';
import Wrapper from "../Wrapper/Wrapper";

const List = (props) => {

    const todosItems = props.todos.map((todo, index)=>{
        return <Item onDeleteTodo={props.onDeleteTodo} key={index} todo={todo}/>;
    });

    return (
        <Wrapper>
            <section>
                <div className="ul_container">
                    <ul>
                        { todosItems }
                    </ul>
                </div>
            </section>
        </Wrapper>
    );
};

export default List;
