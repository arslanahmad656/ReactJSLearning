import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/first';
import Incrementor from './components/click-counter/Incrementor';
import Card from './components/github-fetch/Card';
import CardList from './components/github-fetch/CardList';
import { testData as gitHubCardTestData } from './components/github-fetch/sample-data';

function App() {
  return (
    <div className="App">
      {/* <FirstComponent /> */}
      {/* <Incrementor initialValue={100}
        message={"Decrement by 5"}
        step={-5}
      />

      <hr /> <br />

      <Incrementor initialValue={0}
        message={"Increment by 15"}
        step={15}
      /> */}

      {/* <Card 
        avatar_url="https://avatars2.githubusercontent.com/u/6820?v=4" 
        name="Profile Name" 
        company="Organization" 
      /> */}
      <CardList cardList={gitHubCardTestData} />
    </div>
  );
}

export default App;
