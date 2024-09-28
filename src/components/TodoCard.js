import React from 'react';

const TodoCard = ({ todo, index, updateTodo, deleteTodo }) => {
     return (
          <div className="card" style={{ backgroundColor: 'lightgreen' }}>
               <div className="card-body">
                    <h5 className="card-title">{todo.name}</h5>
                    <p className="card-text">{todo.description}</p>
                    <div className="d-flex justify-content-between">
                         <select
                              value={todo.status}
                              onChange={(e) => updateTodo(index, { ...todo, status: e.target.value })}
                              className="form-select"
                              style={{ width: 'auto' }}
                         >
                              <option value="not completed">Not Completed</option>
                              <option value="completed">Completed</option>
                         </select>
                         <div>
                              <button onClick={() => updateTodo(index)} className="btn btn-success me-2">Edit</button>
                              <button onClick={() => deleteTodo(index)} className="btn btn-danger">Delete</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default TodoCard;
