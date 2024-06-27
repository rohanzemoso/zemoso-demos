import React, { useState } from 'react';
import Display from '../atoms/Display';
import CounterControls from '../molecules/CounterControls';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="counter">
        <h1>Counter App</h1>
      <Display value={count} />
      <CounterControls onDecrement={decrement} onIncrement={increment} />
    </div>
  );
};

export default Counter;
