import React from 'react';
import './Board.css';

interface Props extends React.PropsWithChildren {
}

const Board: React.FC<Props> = ({test, children}) => {
  return (
    <div className="Board">
      {children}
    </div>
  );
};

export default Board;