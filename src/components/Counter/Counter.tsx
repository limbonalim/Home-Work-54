import React from 'react';
import './Counter.css';

interface Props {
  score: number;
}

const Counter: React.FC<Props> = ({score}) => {
  return (
    <div className="Counter">
      {score}
    </div>
  );
};

export default Counter;