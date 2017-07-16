import React from 'react';

const Todo = ({todos, onAddTodo}) =>{
  let inputs;
function handleClicks() {
  onAddTodo(inputs.value);
}
  return (<div>
  <input type="text" ref={ node =>{
    inputs = node;
    console.log(inputs);
  }}/>
  <button onClick={ handleClicks }>Click ME</button>
  <ul>
    {todos.map(todo =>(
      <li key={ todo.id }>{ todo.text }</li>
    ))}
  </ul>
  </div>)

}

export default Todo;
