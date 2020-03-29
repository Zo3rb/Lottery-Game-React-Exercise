import React from 'react';
import Lottery from './Lottery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery numBalls={4} title="Daily" maxNumber={10} />
    </div>
  );
}

export default App;
