import React, { Component } from 'react'

export default class UserGreeting extends Component {
 
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    

  render() {
    return this.state.isLoggedIn && <div>Hello Anushika</div>

    // return (this.state.isLoggedIn ? <div>Hello Anushika</div> : <div>Hello Guest</div>)

    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Hello Anushika</div>
    // }else{
    //     message = <div>Hello User</div>
    // }

    // return message

    // if(this.state.isLoggedIn){
    //     return <div>Hello Anushika</div>
    // }
    // else{
    //     return <div>Hello User</div>
    // }

    // return (<div>
    //     <div>Hello Anushika</div>
    //     <div>Hello User</div>
    //   </div>
    // )
  }
}
