import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: 'dfsaj', name: 'Neil', age: 24},
      { id: 'uiop', name: 'Max', age: 28},
      { id: 'dfasa', name: 'Manu', age: 29},
      { id: 'cvxz', name: 'Stephanie', age:26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    //OR you can use this:
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();

    //better practice to use this than above
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green', 
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if(this.state.showPersons) {

      style.backgroundColor = 'red';

      persons = (
        <div>
          <button style={style} onClick={this.togglePersonsHandler}>Hide People</button>

          {this.state.persons.map((person, index) => {
            return <Person name={person.name} age={person.age} click={() => this.deletePersonHandler(index)} key={person.id} changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}

          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Max!')} changed={this.nameChangedHandler} >
          My Hobbies: Racing</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
          <Person name={this.state.persons[3].name} age={this.state.persons[3].age} /> */}

      </div>
      );
    } else {
      persons = (
        <button style={style} onClick={this.togglePersonsHandler}>Show People</button>
      );
    }

    const classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red'); //classes = ['red'] 
    }
    if(this.state.persons.length <= 1){
      classes.push('bold'); //classes = ['red', 'bold']
    }


    return (
      
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          {persons}        
        </div>
      
    );
    //return React.createElement('div', null, React.createElement('h1', {className:'App'}, 'Does this work now?'))
  }
}

export default App;
