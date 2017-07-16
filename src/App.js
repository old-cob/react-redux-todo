import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Counter from './components/counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter value={store.getState().counter}
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
