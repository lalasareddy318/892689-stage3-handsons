import logo from './logo.svg';
import './App.css';
import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <div className="container">
      <CalculateScore Name={"Steeve"}
      School={"DNV Public School"}
      total={284}
      goal={3}
      />
    </div>
  );
}

export default App;
