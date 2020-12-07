import './App.css';


// Props Examples
import Aprops from './Props/Aprops';
import Props from './Props/Props'

// UseState Example
import Statecounter from './UseState/Statecounter';
import Toggle from './UseState/Toggle';

// React Context Example
import ConsumerData from './ContextApi/ConsumerData';


const App = () => {
  return(
    <div className="App"> 
        <Props />
        <Aprops />

        <Statecounter />
        <Toggle />
        <ConsumerData />

    </div>
  )
};

export default App;
