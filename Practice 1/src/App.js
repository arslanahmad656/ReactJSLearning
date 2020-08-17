import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter'
import ParentComponent from './Components/ParentComponent';
import { FormHandlingComponent } from './Components/FormHandlingComponent';
import PureComponentDemo from './Components/PureComponents/ParentComponent';
import MemoParent from './Components/MemoComponent/MemoParent';

class App extends Component { 
  render() {
    return (
      <div className="App">
        {/* <MemoParent /> */}
        {/* <PureComponentDemo /> */}
        {/* <FormHandlingComponent /> */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <Counter></Counter> */}
      </div>
    );
  }
}

export default App;
