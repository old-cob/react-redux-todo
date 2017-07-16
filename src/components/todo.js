import React from 'react';

const Todo = ({todos, onTodo}) =>(
  <ul>
    {todos.map(todo =>(
      <li key={todo.id}>{ todo.text }</li> 
    ))}
  </ul>
)

export default Todo;
