import React, {MouseEventHandler} from 'react';
import {Cell} from '../../types';
import './Square.css';

export interface SquareType extends Cell {
  showInner: MouseEventHandler | null;
}

const Square: React.FC<SquareType> = ({hasItem, clicked, showInner}) => {
  const className = ['Square'];
  if (clicked) {
    className.push('active');
  }

  return (
    <div className={className.join(' ')} onClick={!clicked ? showInner : null}>
      {hasItem ? <span className="ring">o</span> : null}
    </div>
  );
};

export default Square;