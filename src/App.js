import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Neil', age: 24},
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age:26}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    //console.log('was clicked');
    // DONT DO THIS:
    //this.state.persons[0].name = 'Maximiliian';

    this.setState({
      persons: [
        { name: 'Neil', age: 24},
        { name: newName, age: 28},
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age:27}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Neil', age: 24},
        { name: event.target.value, age: 28},
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age:26}
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white', 
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={() => this.switchNameHandler('Maximilian!!!')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Max!')} changed={this.nameChangedHandler} >
        My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
      </div>
    );
    //return React.createElement('div', null, React.createElement('h1', {className:'App'}, 'Does this work now?'))
  }
}

export default App;
