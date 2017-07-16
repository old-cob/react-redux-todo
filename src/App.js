import React, { Component } from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';


const counter = (state = 0, action) => {
  switch (action.type){
    case 'INCREMENT':
      return state + action.num;
    default:
      return state;
  }
};

const store = createStore(counter);

const Counter = ({value, onIncrement}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement(1)}>Plus 1</button>
    <button onClick={onIncrement(-1)}>Minus 1</button>
    <button onClick={onIncrement(10)}>Plus 10</button>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter value={store.getState()}
        onIncrement={ (n)=> ()=> store.dispatch({ type: 'INCREMENT', num: n })}
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
