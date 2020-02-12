import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Max",  age: 28},
      {name: "MANU", age: 29},
      {name: "Stephanie",  age: 26},
    ]
  }

  switchNameHandler = () =>{
    // console.log('was clicked');
    // DONT DO THIS this.state.persons[0].name = "Vitor"
    this.setState({ 
      persons: [
        {name: "Vitor",  age: 27},
        {name: "Lucas", age: 18},
        {name: "Marina",  age: 27},
     ]
    })
  }

  render() {    
    return (
      <div className="App">
       <h1> Hi, i am Reach App </h1>
       <p> This is really working </p>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

       <button onClick={this.switchNameHandler}> Switch Name </button>   
      </div>
    );
    // sintaxe alternativa:
    // return React.createElement('div',{className:"App"},React.createElement('h1',null,'Dies this work nows?'));
  }
}

export default App;
