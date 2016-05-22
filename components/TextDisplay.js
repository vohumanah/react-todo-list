import React, { Component } from 'react'

class TextDisplay extends Component {

  render() {
    return <div>I'm displaying text from my parent: {this.props.text}</div>
  }
}
//allows parent component App.js to import child component TextInput
export default TextDisplay
