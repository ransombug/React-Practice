import './App.css';


// Props Examples
import Aprops from './Props/Aprops';
import Props from './Props/Props'

// UseState Example
import Statecounter from './UseState/Statecounter';
import Toggle from './UseState/Toggle';

// React Context Example
import ConsumerData from './ContextApi/ConsumerData';
import FetchAPI from './API/FetchAPI';
import FetchAPITwo from './API/FetchAPITwo';


const App = () => {
  return(
    <div className="App"> 
        {/* Prop Drilling Example */}
        <Props />
        <Aprops />

        {/* UseState Example */}
        <Statecounter />
        <Toggle />

        {/* Context API Example */}
        <ConsumerData />

        {/* API using fetch() method. */}
        <FetchAPI />
        <FetchAPITwo />

    </div>
  )
};

export default App;
