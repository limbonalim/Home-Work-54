import {useState} from 'react';
import Board from '../../components/Board/Board.tsx';
import Square from '../../components/Square/Square.tsx';
import {Cell} from '../../types';
import './App.css'
const createItems = (howMany:number = 36):Cell[] => {
  const items:Cell[] = [];
  const random = Math.floor(Math.random() * howMany);
  for (let i = 0; i < howMany; i++) {
    let item:Cell = {
      hasItem: false,
      clicked: false,
    };
    items.push(item);
  }
  items[random].hasItem = true;
  console.log(items)
  return items;
};
const App = () => {
  const [items, setItems] = useState(createItems());
  const showInner = (index) => {

  };
  let squareList = null;
  squareList = items.map((item,index) => {
    return <Square hasItem={item.hasItem} clicked={item.clicked} showInner={() => showInner(index)}/>;
  });
  return (
    <div>
      <Board>
        {squareList}
      </Board>
    </div>
  );
};

export default App
