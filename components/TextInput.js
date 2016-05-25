import React, { Component } from 'react'
import TextDisplay from './TextDisplay'

class TextInput extends Component {

  //state must be initialized
  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: 'initial text'
    }
  }

  deleteLetter() {
    //take current state which is this.state.inputText
    //delete letter
    //update state
    //anytime you change state use this.setState
    this.setState({
      inputText: this.state.inputText.substring(0, this.state.inputText.length - 1)
    })
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  // button on child component TextDisplay can access method deleteLetter on parent component
  // TextInput via state and props
  // we can pass something down to TextDisplay as a prop
  // prop can be string ie this.state.inputText and functions ie this.deleteLetter
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="This is going to be text"
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
      <TextDisplay text={this.state.inputText} deleteLetter={this.deleteLetter.bind(this)}/>
      </div>
    )
  }

}

export default TextInput
