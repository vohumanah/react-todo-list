import React, { Component } from 'react'

class TextDisplay extends Component {

  handleClick() {
    this.props.deleteLetter()
  }

  //onClick is an event handler on an html element so we have to bind this
  //so that the handle click function has access to this component and not HTML page
  //this.handleClick.bind(this )
  render() {
    return (
      <div>
        <div>I'm displaying text from my parent: {this.props.text}</div>
        <button onClick={this.handleClick.bind(this)}>delete one letter</button>
      </div>
    )
  }
}

export default TextDisplay
