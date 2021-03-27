import logo from './logo.svg';
import './css/styles.css'
import { Component } from 'react';
import TopMenu from './components/TopMenu.js';
import Header from './components/Header.js'
import Sections from './components/Sections.js'
import Footer from "./components/Footer.js"
import SetState from './components/SetState.js'
import LifeCycle from './components/LifeCycle.js'

class App extends Component {
  render() {
    return (
      <div>
        <LifeCycle/>
      </div>
    );
  }
}

export default App;
