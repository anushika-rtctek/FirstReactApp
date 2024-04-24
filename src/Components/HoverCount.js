import React, { Component } from 'react'
import withCounter from './withCounter'

export class HoverCount extends Component {
        
  render() {
    const {count, incrementCount} = this.props
    return (
      <div>
        <h1 onMouseLeave={incrementCount}> Hovered {count} times</h1>
      </div>
    )
  }
}

export default withCounter(HoverCount, 4)
