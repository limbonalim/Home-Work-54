import {useState} from 'react';
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

  let squareList = null;

  const showInner = (id) => {
    setScore(prevState => prevState + 1);
    setItems(prevState => prevState.map((cell) => {
      if (cell.id !== id) {
        return {...cell};
      } else {
        return {...cell, clicked: true};
      }
    }));
  };

  squareList = (
    <Game showInner={showInner} items={items}/>
  );

  return (
    <div>
      <Board counter={score}>
        {squareList}
      </Board>
    </div>
  );
};

export default App;
