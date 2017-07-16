import React, { Component } from 'react';
import { createStore } from 'redux';

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
        <Counter value={store.getState()} />
      </div>
    );
  }
}

export default App;
