import React, { Component } from 'react'

class ClickClass extends Component {
    clickHandler(){
        console.log("Button is clicked")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me Class</button>
      </div>
    )
  }
}

export default ClickClass
