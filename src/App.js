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
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './Components/Form';
import LifecycleA from './Components/LifecycleA';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';
import ContainingParentComponent from './Components/ContainingParentComponent';
import RefDemo from './Components/RefDemo';
import FocusInput from './Components/FocusInput';
import FRParent from './Components/FRParent';
import PortalsDemo from './Components/PortalsDemo';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';
import ClickCounter from './Components/ClickCounter';
import HoverCount from './Components/HoverCount';
import ClickCounterTwo from './Components/ClickCounterTwo';
import HoverCounterTwo from './Components/HoverCounterTwo';
import User from './Components/User';
import CounterTwo from './Components/CounterTwo';
import { UserProvider } from './Components/UserContext';
import ComponentC from './Components/ComponentC';

function App() {
  return (
    <div className="App">
      <UserProvider value="Anushika">
        <ComponentC/>
      </UserProvider>
      {/* <CounterTwo render={(count, incrementCount) => 
        <ClickCounterTwo count={count} incrementCount={incrementCount}/>}/>
      <CounterTwo render={(count, incrementCount) => 
        <HoverCounterTwo count={count} incrementCount={incrementCount}/>}/> */}
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={(isLoggedIn) => isLoggedIn ? 'Anushika' : 'Guest'}/> */}
      {/* <ClickCounter name="Anushika"/> */}
      {/* <HoverCount/> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker"/>
      </ErrorBoundary> */}
      {/* <PortalsDemo/> */}
      {/* <FRParent/> */}
      {/* <FocusInput/> */}
      {/* <RefDemo/> */}
      {/* <ContainingParentComponent/> */}
      {/* <Table/> */}
      {/* <FragmentDemo/> */}
      {/* <LifecycleA/> */}
      {/* <Form/> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Inline/> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList/> */}
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
