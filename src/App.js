import React, {useState} from 'react';

import './App.css';
import Form from "./Form/Form";
import List from "./List/List";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (todo) => { setTodos(prev => [...prev, todo]); };

  const deleteTodo = (todo) => {
    setTodos(todos.filter(item => item !== todo));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
      </header>
      <main>
          <Form onAddNewTodo={addNewTodo} />
          <List todos={todos} onDeleteTodo={deleteTodo} />
      </main>
    </div>
  );
};

export default App;
