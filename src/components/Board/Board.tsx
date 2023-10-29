import React, {MouseEventHandler} from 'react';
import './Board.css';
import Counter from '../Counter/Counter.tsx';

interface Props extends React.PropsWithChildren {
  counter: number;
  reset: MouseEventHandler;
  gameOver: boolean;
}

const Board: React.FC<Props> = ({children, counter, reset, gameOver}) => {
  return (
    <div className="Board">
      <div className="Play">
        {children}
      </div>
      {gameOver ? 'You Are Win!' : null}
      <Counter score={counter}/>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Board;