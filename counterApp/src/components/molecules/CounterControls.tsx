import React from 'react';
import Button from '../atoms/Button';

type CounterControlsProps = {
  onIncrement: () => void;
  onDecrement: () => void;
};

const CounterControls: React.FC<CounterControlsProps> = ({ onIncrement, onDecrement }) => {
  return (
    <div className="counter-controls">
      <Button onClick={onDecrement}>-</Button>
      <Button onClick={onIncrement}>+</Button>
    </div>
  );
};

export default CounterControls;
