import './App.css';

// Props Examples
import Aprops from './Props/Aprops';
import Props from './Props/Props'

// UseState Example
import Statecounter from './UseState/Statecounter';
import Toggle from './UseState/Toggle';

const App = () => {
  return(
    <div className="App"> 
      {/* Props Examples */}
          {/* <Props />
          <Aprops /> */}

        <Statecounter />
        <Toggle />

    </div>
  )
}

export default App;
