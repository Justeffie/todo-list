import React, { useState } from 'react';

import './Form.css';
import Wrapper from "../Wrapper/Wrapper";

const Form = (props) => {

    const todoWithRandomId = (val) => { return {id: Math.random(), todo: val}};

    const [todo, setTodo] = useState(todoWithRandomId(""));
    const [isValid, setIsValid] = useState(true);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (todo.todo.trim().length === 0) {
            setIsValid(false);
            return;
        }

        props.onAddNewTodo(todo);
        setTodo(todoWithRandomId(""));
    };

    const onChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        debugger;
        setTodo((prevState) => ({
            ...prevState,
            todo: event.target.value
        }));
    };

    return (
        <Wrapper>
            <section>
                <form onSubmit={onSubmitHandler}>
                    <input style={{borderColor: !isValid ? "red" : "#1eb1d2"}} type="text" value={todo.todo} onChange={onChangeHandler}/>
                    <button className="button_form" type="submit">Add</button>
                </form>
            </section>
        </Wrapper>
    );
};

export default Form;
