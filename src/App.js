import React, { Component } from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';


const counter = (state = 0, action) => {
  switch (action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counter);

const Counter = ({value, onIncrement, onDecrement}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>Plus</button>
    <button onClick={onDecrement}>Minus</button>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter value={store.getState()} onIncrement={ ()=> {
          console.log('FUCK COME ON GIO');
          store.dispatch({ type: 'INCREMENT' })
        } } />

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
