import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './components/Splitting/Parent';
import ModalViewer from './components/portal-example/ModalViewer';

function App() {
  return (
    <div className="App">
      <ModalViewer />
      {/* <Parent /> */}
    </div>
  );
}

export default App;
