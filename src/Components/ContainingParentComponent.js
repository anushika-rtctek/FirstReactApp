import React, { Component } from 'react'
import PureComp from './PureComponent'
import RegularComp from './RegularComponent'
import MemoComponent from './MemoComponent'

class ContainingParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Anushika'
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Anushika'
            })
        }, 2000)
    }    

  render() {
    console.log("**************Parent Component render****************")
    return (
      <div>
        <h1>Containing Parent Component</h1>
        <MemoComponent name={this.state.name}/>
        <PureComp name={this.state.name}/>
        <RegularComp name={this.state.name}/>
      </div>
    )
  }
}

export default ContainingParentComponent
