import { useState } from 'react';
import uniqid from 'uniqid';

function App() {
  const [number, setNumber] = useState(0);
  const [numList, setNumList] = useState({})

  function addToList(e) {
    e.preventDefault()
    setNumList({
      ...numList,
      [uniqid()]: number
    })
    setNumber(0)
  }

  return (
    <div className='app'>
      <form onSubmit={(e) => addToList(e)}>
        <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))}></input>
        <button>Add</button>
      </form>
    </div>
  )
}

export default App
