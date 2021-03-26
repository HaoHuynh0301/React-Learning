import logo from './logo.svg';
import './css/styles.css'
import { Component } from 'react';
import ClickAction from './components/ClickAction.js'

function Display() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <ClickAction/>
      </div>
    );
  }
}

export default App;
