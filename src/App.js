import React from 'react';

import logo from './logo.svg';
import './App.css';
import './components/hero.css';
import hero from './components/hero';

class App extends React.Component {
  render () {
    return (
  <div className="App">
    <hero></hero>
    </div>
  );
}
}

export default App;
