import React from 'react';
import TodoCard from './TodoCard';

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
     return (
          <div className="row">
               {todos.map((todo, index) => (
                    <div key={index} className="col-sm-4 mb-3">
                         <TodoCard
                              todo={todo}
                              index={index}
                              updateTodo={updateTodo}
                              deleteTodo={deleteTodo}
                         />
                    </div>
               ))}
          </div>
     );
};

export default TodoList;
