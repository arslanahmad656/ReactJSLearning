import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionalPropsComponent from './components/props-test/FunctionalPropsComponents';
import ClassPropsComponent from './components/props-test/ClassPropsComponent';
import StateClassComponent from './components/props-test/state-test/StateClassComponent';
import EventBindingComponent from './components/event-binding-test/EventBindingComponent';
import CommunucationParentComponent from './components/parent-child-communication/CommunicationParentComponent';
import ListPersonComponent from './components/lists/ListPersonComponent';
import StyledComponent from './components/styling/StyledComponent';
import FormHandlingComponent from './components/form-handling/FormHandlingComponent';
import LifeCycleComponentA from './components/lifecycle-methods/LifeCycleComponentA';
import ParentPureRegularComponent from './components/pure-components/ParentPureRegularComponent';
import MemoParentComponent from './components/memo-component/MemoParentComponent';
import SimpleRefComponent from './components/refs/SimpleRefComponent';
import CallbackRefComponent from './components/refs/CallbackRefComponent';
import ComponentRefComponent from './components/refs/ComponentRefComponent';
import ForwardRefParentComponent from './components/refs/ForwardRefParentComponent';
import PortalComponent from './components/portal/PortalComponent';
import BooksListErrorBoundaryComponent from './components/error-boundaries/BooksListErrorBoundaryComponent';
import ClickCounterComponent from './components/higher-order-components/ClickCounterComponent';
import HoverCounterComponent from './components/higher-order-components/HoverCounterComponent';
import ClickCounterUsingRenderProps from './components/render-props/ClickCounterUsingRenderProps';
import CounterComponentForRenderProps from './components/render-props/CounterComponentForRenderProps';
import HoverCounterUsingRenderProps from './components/render-props/HoverCounterUsingRenderProps';
import UserContextConsumer1 from './components/context/UserContextConsumer1';
import UserContext from './components/context/UserContext';
import UserContextConsumer2 from './components/context/UserContextConsumer2';
import HttpGetDemoComponent from './components/http/HttpGetDemoComponent';

function App() {
  return (
    <div className="App">
      <HttpGetDemoComponent />
      {/* <UserContextConsumer1 />
      <UserContext.Provider value="arslanahmad656">
        <UserContextConsumer1 />
      </UserContext.Provider>
      <UserContextConsumer2 />
      <UserContext.Provider value="asimkabir456">
        <UserContextConsumer2 />
      </UserContext.Provider> */}
      {/* <CounterComponentForRenderProps 
        step={10} 
        render={(count, incrementCount) => <ClickCounterUsingRenderProps info='Click Component' count={count} incrementCount={incrementCount} />}
      /> <hr />
      <CounterComponentForRenderProps
        step={20}
        render={(count, incrementCount) => <HoverCounterUsingRenderProps count={count} incrementCount={incrementCount} info='Hover Component' />}
      /> */}
      {/* <ClickCounterComponent info="Click Counter Component" />
      <hr /> <HoverCounterComponent /> */}
      {/* <BooksListErrorBoundaryComponent/> */}
      {/* <PortalComponent /> */}
      {/* <ForwardRefParentComponent /> */}
      {/* <ComponentRefComponent /> */}
      {/* <CallbackRefComponent /> */}
      {/* <SimpleRefComponent /> */}
      {/* <MemoParentComponent /> */}
      {/* <ParentPureRegularComponent /> */}
      {/* <LifeCycleComponentA text='Initial Text'/> */}
      {/* <FormHandlingComponent/> */}
      {/* <StyledComponent /> */}
      {/* <ListPersonComponent /> */}
      {/* <CommunucationParentComponent/> */}
      {/* <EventBindingComponent /> */}
      {/* <StateClassComponent /> */}
      {/* <FunctionalPropsComponent name='From Functional' nick='Functional Component'>
        This is some content
        <button>Hello</button>
      </FunctionalPropsComponent>

      <ClassPropsComponent name='From Class' nick='Class Component'>
        This is some content
        <button>Hello</button>
      </ClassPropsComponent> */}
    </div>
  );
}

export default App;
