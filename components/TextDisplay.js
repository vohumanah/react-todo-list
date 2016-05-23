import React, { Component } from 'react'

class TextDisplay extends Component {

  render() {
    return (
      <div>
        <div>I'm displaying text from my parent: {this.props.text}</div>
        <button onClick={this.handleClick}>delete one letter</button>
      </div>
    )
}
}

export default TextDisplay
