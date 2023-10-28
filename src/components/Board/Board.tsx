import React, {MouseEventHandler} from 'react';
import './Board.css';
import Counter from '../Counter/Counter.tsx';

interface Props extends React.PropsWithChildren {
  counter: number;
  reset: MouseEventHandler;
}

const Board: React.FC<Props> = ({children, counter, reset}) => {
  return (
    <div className="Board">
      <div className="Play">
        {children}
      </div>
      <Counter score={counter}/>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Board;