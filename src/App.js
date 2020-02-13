import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'


  // class App extends Component {
  //   state = {
  //     persons: [
  //       {name: "Max",  age: 28},
  //       {name: "MANU", age: 29},
  //       {name: "Stephanie",  age: 26},
  //     ]
  //  }


  const app = props =>{
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Vitor',  age: 27},
      {name: 'Lucas',  age: 19},
      {name: 'Marina', age: 27}  
    ]  
  });

  const [otherState, setOtherState] = useState("SomeOther state");

  const switchNameHandler = () => {
    setPersonsState({ 
      persons: [
        {name: "Vitor",  age: 7},
        {name: "Lucas", age: 8},
        {name: "Marina",  age: 7}
     ],
     otherState: personsState.otherState
    });
  };

  
  return (
    <div className="App">
     <h1> Hi, i am Reach App </h1>
     <p> This is really working </p>
     <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
     <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
     <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>

     <button onClick={switchNameHandler}> Switch Name </button>   
    </div>
  );
  // sintaxe alternativa:
  // return React.createElement('div',{className:"App"},React.createElement('h1',null,'Dies this work nows?'));
  
}

export default app;

