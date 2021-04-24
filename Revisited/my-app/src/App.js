import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/first';
import Incrementor from './components/click-counter/Incrementor';

function App() {
  return (
    <div className="App">
      {/* <FirstComponent /> */}
      <Incrementor initialValue={100}
        message={"Decrement by 5"}
        step={-5}
      />

      <hr /> <br />

      <Incrementor initialValue={0}
        message={"Increment by 15"}
        step={15}
      />
    </div>
  );
}

export default App;
