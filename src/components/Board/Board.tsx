import React from 'react';
import './Board.css';
import Counter from '../Counter/Counter.tsx';

interface Props extends React.PropsWithChildren {
  counter: number;
}

const Board: React.FC<Props> = ({children,counter}) => {
  return (
    <div className="Board">
      <div className="Play">
        {children}
      </div>
      <Counter score={counter}/>
      <button>Click me</button>
    </div>
  );
};

export default Board;