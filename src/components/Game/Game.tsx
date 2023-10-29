import React, {MouseEventHandler} from 'react';
import Square from '../Square/Square.tsx';
import {Cell} from '../../types';
import './Game.css';

interface Props {
  items: Cell[];
  showInner: MouseEventHandler;
}

const Game: React.FC<Props> = ({items, showInner}) => {
  return (
    <div className="Game">
      {items.map((item) => {
        return (
          <Square
            key={item.id}
            hasItem={item.hasItem}
            clicked={item.clicked}
            showInner={() => {
              showInner(item.id);
            }}
            id={item.id}/>);
      })}
    </div>
  );
};

export default Game;