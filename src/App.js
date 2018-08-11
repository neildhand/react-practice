import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="neil" age="24" />
        <Person name="Max" age="28" >
        My Hobbies: Racing</Person>
        <Person name="Stephanie" age="26" />
      </div>
    );
    //return React.createElement('div', null, React.createElement('h1', {className:'App'}, 'Does this work now?'))
  }
}

export default App;
