import './css/styles.css'
import { Component } from 'react';
import DirectRouter from './router/DirectRouter.js'

class App extends Component {
  render() {
    return (
      <div>
        <DirectRouter/>
      </div>
    );
  }
}

export default App;
