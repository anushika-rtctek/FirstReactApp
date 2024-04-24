import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Anushika'
        }
        console.log("LifecycleA constructor")
    }

    changeState = () => {
        this.setState({
            name: 'Shruti'
        })
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifecycleA getDerivedStateFromProps")
        return null
    }

    shouldComponentUpdate(){
        console.log("LifecycleA shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifecycleA getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("LifecycleA componentDidUpdate")
    }

    componentDidMount(){
        console.log("LifecycleA componentDidMount")
    }
  render() {
    console.log("LifecycleA render")
    return (
      <div>
        <h1>Lifecycle A</h1>
        <LifecycleB/>
        <button onClick={this.changeState}>Change State</button>
      </div>
    )
  }
}

export default LifecycleA
