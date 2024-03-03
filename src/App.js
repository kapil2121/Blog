import logo from './logo.svg';
import './App.css';

import { Component } from 'react';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters:[
        {
          id:1,
          name:'Kapil'
        },
        {
          id:2,
          name:'Jacky'
        },
        {
          id:3,
          name:'Frank'
        },
        {
          id:4,
          name:'Rohit'
        }
      ]
    }
  }

  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map((monster)=>{
            return <div key={monster.id}><h1>{monster.name}</h1></div>
          })
        }
      </div>
    );
  }
}

export default App;
