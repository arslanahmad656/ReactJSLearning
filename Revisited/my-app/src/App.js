import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/first';
import Incrementor from './components/click-counter/Incrementor';
import Card from './components/github-fetch/Card';
import CardList from './components/github-fetch/CardList';
import { testData as gitHubCardTestData } from './components/github-fetch/sample-data';
import ControlledInputs from './components/ControlledInputs';
import LifecycleComponent from './components/lifecycle/Component';
import RefParent from './components/refs/RefParent';
import PortalParent from './components/portals/PortalParent';
import PortalContainer from './components/portals/PortalContainer';
import Parent from './components/ErrorBoundaries/Parent';
import HOCDemo from './components/HOC/HOCDemo';
import RenderPropsParent from './components/render-props/RenderPropsParent';
import ContextParent from './components/Context/Parent'
import UseEffectWithClass from './hookComponents/useEffect/UseEffectWithClass';
import ReducerCounter from './hookComponents/useReducer/ReducerCounter';
import ReducerContextParent from './hookComponents/useReducer/ReducerWithContext/ReducerContextParent';

function App() {
  return (
    <div className="App">
      <ReducerContextParent />
      {/* <ReducerCounter /> */}
      {/* <UseEffectWithClass /> */}
      {/* <ContextParent /> */}
      {/* <RenderPropsParent /> */}
      {/* <HOCDemo /> */}
       {/* <Parent /> */}
      {/* <PortalContainer /> */}
      {/* <PortalParent /> */}
      {/* <RefParent /> */}
      {/* <div>
        <LifecycleComponent name={"Level - 1"} addStateButton={true}>
          <LifecycleComponent name={"Level - 1.1"} />
          <LifecycleComponent name={"Level - 1.2"} addStateButton={true}>
            <LifecycleComponent name={"Level - 1.2.1"} />
          </LifecycleComponent>
        </LifecycleComponent>
      </div> */}
      {/* <ControlledInputs /> */}
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
      {/* <CardList cardList={gitHubCardTestData} /> */}
    </div>
  );
}

export default App;
