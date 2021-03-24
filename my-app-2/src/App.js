import logo from './logo.svg';
import './css/styles.css'
import { Component } from 'react';
import './components/TopMenu'
import TopMenu from './components/TopMenu.js'
import Masthead from './components/Masthead.js'
import PortfolioSection from './components/Portfolio Section.js'
import ClickAction from './components/ClickAction.js'

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
