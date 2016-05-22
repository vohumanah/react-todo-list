import React, { Component } from 'react'
import TextInput from './TextInput'

class App extends Component {

  render() {
    return (
    //JSX elements must be wrapped in enclosing tag
    //Cannot have two sibling elements at top level of render function
    //react uses className for declare class
    <div>
      <h1>This is the App Component</h1>
      <TextInput/>
    </div>
    )
  }
}

export default App
