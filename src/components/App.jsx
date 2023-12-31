import { useState } from 'react';
import uniqid from 'uniqid';
import { ItemList } from './ItemList';

function App() {
  const [number, setNumber] = useState(0);
  const [numList, setNumList] = useState({})

  function addToList(e) {
    e.preventDefault()
    setNumList({
      [uniqid()]: number,
      ...numList
    })
    setNumber(0)
  }

  function deleteNum(id) {
    const listCopy = {...numList};
    delete listCopy[id];
    setNumList(listCopy)
  }

  return (
    <div className='app'>
      <form onSubmit={(e) => addToList(e)}>
        <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))}></input>
        <button>Add</button>
      </form>
      <ItemList numList={numList} deleteNum={deleteNum}></ItemList>
    </div>
  )
}

export default App
