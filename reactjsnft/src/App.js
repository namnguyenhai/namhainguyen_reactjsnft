// import logo from './logo.svg';
import './App.css';
import { Button } from './Component/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button percent={10} onClick={() => console.log('After click')} > click me</Button>
        <Button percent={12.3}>12.3%</Button>
        <Button percent={8.1}>8.1%</Button>
        <Button percent={- 5.1}>5.1%</Button>
        <Button percent={3.2}>3.2%</Button>
      </header>
    </div>
  );
}

export default App;
