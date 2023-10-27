import React, {MouseEventHandler} from 'react';
import {Cell} from '../../types';
import './Square.css';

interface Square extends Cell {
  showInner: MouseEventHandler;
}
const Square: React.FC<Square> = ({hasItem,clicked, showInner}) => {
  const className = ['Square'];
  if (clicked) {
    className.push('active')
  }

  return (
    <div className={className.join(' ')} onClick={showInner}>
    </div>
  );
};

export default Square;