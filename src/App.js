import './styles/App.css';
import Buttons from './components/Buttons';
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
        <Buttons handle={add} text="Add+" />
        <Buttons handle={reset} text="Reset" />
      </div>
    </div>
  );
}

export default App;
