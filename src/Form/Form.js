import React, { useState } from 'react';

import './Form.css';

const Form = (props) => {

    const todoWithRandomId = (val) => { return {id: Math.random(), todo: val}};

    const [todo, setTodo] = useState(todoWithRandomId(""));

    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.onAddNewTodo(todo);
        setTodo(todoWithRandomId(""));
    };

    const onChangeHandler = (event) => {
        setTodo((prevState) => ({
            ...prevState,
            todo: event.target.value
        }));
    };

    return (
        <div>
            <section>
                <form onSubmit={onSubmitHandler}>
                    <input type="text" value={todo.todo} onChange={onChangeHandler}/>
                    <button className="button_form" type="submit">Add</button>
                </form>
            </section>
        </div>
    );
};

export default Form;
