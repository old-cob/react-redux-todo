import React from 'react';

const Counter = ({value, onIncrement}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement(1)}>Plus 1</button>
    <button onClick={onIncrement(-1)}>Minus 1</button>
    <button onClick={onIncrement(10)}>Plus 10</button>
  </div>
)

export default Counter;
