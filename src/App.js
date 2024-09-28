import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (task) => {
    setTodos([...todos, { ...task, status: 'not completed' }]);
  };

  const updateTodo = (index, updatedTask) => {
    const newTodos = todos.map((todo, i) => (i === index ? updatedTask : todo));
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const filterTodos = () => {
    if (filter === 'completed') return todos.filter(todo => todo.status === 'completed');
    if (filter === 'not completed') return todos.filter(todo => todo.status === 'not completed');
    return todos;
  };

  return (
    <div className="container mt-4">

      <h1 className="text-center" style={{ color: 'green' }}>my-todo</h1>

      <div className="d-flex justify-content-between mb-3">
        <h2>My Todos</h2>
        <div>
          <label htmlFor="statusFilter" className="me-2">Status Filter:</label>
          <select
            id="statusFilter"
            onChange={(e) => setFilter(e.target.value)}
            className="form-select"
            style={{ display: 'inline-block', width: 'auto' }}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not completed">Not Completed</option>
          </select>
        </div>

      </div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={filterTodos()} updateTodo={updateTodo} deleteTodo={deleteTodo} />

    </div>
  );
};

export default App;
