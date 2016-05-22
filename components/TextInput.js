import React, { Component } from 'react'
import TextDisplay from './TextDisplay'

class TextInput extends Component {
  //state can be used on any component but must be initialized first
  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: 'initial text'
    }
  }

  handleChange(event) {
    //console.log(event.target.value)
    this.setState({
      inputText: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="This is going to be text"
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
        <TextDisplay text={this.state.inputText}/>
      </div>
    )
  }
}
//allows parent component App.js to import child component TextInput
export default TextInput
