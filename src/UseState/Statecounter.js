import React , {useState} from 'react'

const Statecounter = () => {
    
    const [value, setValue] = useState(0);

    return (
        <div>
            <h2>Demo of UseState</h2>
            
            <h5>Value : {value} </h5>

            <button onClick={() => value>=0 && value<15 ? setValue(value+1) : ''}>Increment</button>
            <button onClick={() => value>0 ? setValue(value-1) : ''}>Decrement</button>
            <button onClick={() => setValue(0)}>Reset</button>
        </div>
    )
}

export default Statecounter;
