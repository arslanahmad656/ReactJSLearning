import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickCounter from './examples/render-props/ClickCounter';
import Counter from './examples/render-props/Counter';
import HoverCounter from './examples/HOC/HoverCounter';

function App() {
  return (
    <div className="App">
      <Counter render={(count, incrementCount) => <ClickCounter count={count} incrementCount={incrementCount} />} />
      <HoverCounter info="hover over me to increment count" />
    </div>
  );
}

export default App;
