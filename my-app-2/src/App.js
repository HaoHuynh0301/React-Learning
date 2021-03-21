import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

function Map() {
  return (
    <div>Cach so 1</div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <test/>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div>
        <Map/>
      </div>
    );
  }
}


export default App;
