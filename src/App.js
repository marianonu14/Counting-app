import './styles/App.css';

const count = 0
function App() {
  return (
    <div className="App">
      <header className="header-container">
        <h1>Countainer App</h1>
      </header>
      <div className="main-container">
        <div className="counter">{count}</div>
        <button className='btn'>Add +</button>
        <button className='btn'>Reset</button>
      </div>
    </div>
  );
}

export default App;
