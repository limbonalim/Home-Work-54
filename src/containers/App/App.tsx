import React, {useState} from 'react';
import Board from '../../components/Board/Board.tsx';
import {Cell} from '../../types';
import './App.css';
import Game from '../../components/Game/Game.tsx';

const getRandom = (length: number): string => {
  const alphabet = 'abcdefghiklmnopqrstvxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    const getRandom = Math.floor(Math.random() * alphabet.length);
    result += alphabet[getRandom];
  }
  return result;
};

const getId = (): string => {
  const randomLength = Math.ceil(Math.random() * 10 + 3);
  const date = new Date().toISOString();
  return `${date}/${getRandom(randomLength)}`;
};


const createItems = (): Cell[] => {
  const items: Cell[] = [];
  let numberOfCell = 36;
  const random = Math.floor(Math.random() * numberOfCell);
  for (let i = 0; i < numberOfCell; i++) {
    let item: Cell = {
      hasItem: false,
      clicked: false,
      id: getId(),
    };
    items.push(item);
  }
  items[random].hasItem = true;
  return items;
};
const App = () => {
  const [items, setItems] = useState(createItems());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  let squareList = null;

  const showInner = (id) => {
    if (!gameOver) {
      setScore(prevState => prevState + 1);
      setItems(prevState => prevState.map((cell) => {
        if (cell.id !== id) {
          return {...cell};
        } else {
          if (cell.hasItem === true) {
            setGameOver(true);
          }
          return {...cell, clicked: true};
        }
      }));
    }
  };

  const reset = () => {
    setItems(createItems);
    setScore(0);
    setGameOver(false);
  };

  squareList = (
    <Game showInner={showInner} items={items}/>
  );

  return (
    <div>
      <Board counter={score} reset={reset} gameOver={gameOver}>
        {squareList}
      </Board>
    </div>
  );
};

export default App;
