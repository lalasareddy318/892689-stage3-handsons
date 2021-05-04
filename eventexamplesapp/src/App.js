import logo from './logo.svg';
import './App.css';
import Currency from './Components/Currency';
import Welcome from './Components/Welcome';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
        <Counter/>
        <Welcome/>
        <Currency/>
    </div>
  );
}

export default App;