import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState({ name: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name && task.description) {
      addTodo(task);
      setTask({ name: '', description: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            value={task.name}
            onChange={(e) => setTask({ ...task, name: e.target.value })}
            placeholder="Todo Name"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            placeholder="Todo Description"
          />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">Add Todo</button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
