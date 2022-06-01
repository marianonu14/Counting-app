import './styles/App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <div className="App">
      <header className="header-container">
        <h1>Counting App</h1>
      </header>
      <div className="main-container">
        <div className="counter">{count}</div>
        <button className='btn' onClick={add}>Add +</button>
        <button className='btn' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
