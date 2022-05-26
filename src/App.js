import React from 'react'
import { Home } from './components/home/Home';
import WebState from './context/WebState';

function App() {
  return (
    <>
      <WebState>
        <Home />
      </WebState>
    </>
  );
}

export default App;
