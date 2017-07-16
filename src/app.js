import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Counter from './components/counter';
import Todo from './components/todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter value={store.getState().counter}
        onIncrement={ (n)=> ()=> store.dispatch({ type: 'INCREMENT', num: n })}
        />
        <Todo todos={store.getState().todo}
        onAddTodo={ (text)=> ()=> store.dispatch({ type: 'ADD-TODO', text: text, id:  store.getState().todo.length})}
        />
      </div>
    );
  }
}

const render = ()=>{
  ReactDOM.render(<App />, document.getElementById('root'));
}
render();
store.subscribe(render);

export default App;
