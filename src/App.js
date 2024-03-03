import logo from './logo.svg';
import './App.css';

import { Component } from 'react';

class App extends Component {

  constructor(){
    super();

    this.state = {
      name:{
        firstName:'kapil',
        lastName:'kumar'
      },
      company:'ABC company'
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi, My name is {this.state.name.firstName} {this.state.name.lastName}. I work in {this.state.company}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={() => {
              this.setState(()=>{
                return { 
                  name:{ firstName:'rohit', lastName:'sharma' } 
                }
              },
              ()=>{
                console.log(this.state);
              })
            }
          }>Change name</button>
        </header>
      </div>
    );
  }
}

export default App;
