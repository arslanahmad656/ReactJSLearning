import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseStateComponent1 from './components/use-state/UseStateComponent1';
import UseStatecomponent2 from './components/use-state/UseStatecomponent2';
import UseStateComponent3 from './components/use-state/UseStateComponent3';
import UseEffectComponent from './components/use-effect/UseEffectComponent';
import ParentContextComponent from './components/use-context/ParentContextComponent';
import CounterDemoComponent1 from './components/use-reducer/CounterDemoComponent1';
import CounterDemoComponent2 from './components/use-reducer/CounterDemoComponent2';
import CounterDemoComponent3 from './components/use-reducer/CounterDemoComponent3';
import ParentComponentForContextReducerDemo from './components/use-reducer/use-reducer-with-context/ParentComponentForContextReducerDemo';
import UserParentComponent from './components/use-callback/UserParentComponent';
import ParentComponentDemo from './components/use-callback/another-example/ParentComponentDemo';
import UseMemoDemoComponent from './components/use-memo/UseMemoDemoComponent';
import UseRefDemoCompoent from './components/use-ref/UseRefDemoCompoent';
import UseRefDemoComponent2 from './components/use-ref/UseRefDemoComponent2';
import CounterHookUsageComponent1 from './components/custom-hooks/counter-hook/CounterHookUsageComponent1';
import InputHookUsageComponent from './components/custom-hooks/input-hook/InputHookUsageComponent';
import UseTitleUsageComponent from './components/custom-hooks/document-title/UseTitleUsageComponent';

function App() {
  return (
    <div className="App">
      <div>
        {/* <CounterHookUsageComponent1 /> */}
        {/* <InputHookUsageComponent /> */}
        <UseTitleUsageComponent />
      </div>
      {/* <div>
        <UseRefDemoCompoent />
        <UseRefDemoComponent2 />
      </div> */}
      {/* <div>
        <UseMemoDemoComponent />
      </div> */}
      <div>
        {/* <UserParentComponent /> */}
        {/* <ParentComponentDemo /> */}
      </div>
      <div>
        {/* <CounterDemoComponent1 /> */}
        {/* <CounterDemoComponent2 /> */}
        {/* <CounterDemoComponent3 /> */}
        {/* <ParentComponentForContextReducerDemo /> */}
      </div>
      {/* <div>
        <ParentContextComponent />
      </div> */}
      {/* <div>
        <UseEffectComponent />
      </div> */}
      {/* <div>
        <UseStateComponent1 /> <hr></hr>
        <UseStatecomponent2 /><hr></hr>
        <UseStateComponent3 /> <hr></hr>
      </div> */}
    </div>
  );
}

export default App;
