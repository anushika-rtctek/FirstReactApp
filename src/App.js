import logo from './logo.svg';
import './App.css';
import {Greet} from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello  from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import ClickFunction from './Components/ClickFunction';
import ClickClass from './Components/ClickClass';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';

function App() {
  return (
    <div className="App">
      <NameList/>
      
      {/* <UserGreeting/> */}

      {/* <ParentComponent/> */}

      {/* <EventBind/> */}

      {/* <ClickFunction/>
      <ClickClass/> */}

      {/* <Counter/> */}

      {/* <Message/>
      <Greet name="Peter" hero="Ironman">
        <p>This is about Ironman.</p>
      </Greet>
      <Greet name="John" hero="Batman">
        <button>FLY</button>
      </Greet> */}
      {/* <Greet name="Sarah" hero="Wonder woman"/> */}
      {/* <Hello/>  */}
      {/* <Welcome name="Peter" hero="Ironman"/> */}
      {/* <Welcome name="John" hero="Batman"/>
      <Welcome name="Sarah" hero="Wonder woman"/> */}
    </div>
  );
}

export default App;
