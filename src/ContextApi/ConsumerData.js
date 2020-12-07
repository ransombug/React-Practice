import React, {Fragment} from 'react'

import Context from './Context'
import Provider from './Provider'

const Agents = () =>{
    return <AgentOne />
}

const AgentOne = () =>{
    return <AgentTwo />
}

const AgentTwo = () =>{
    return <AgentBond />
}

const AgentBond = () =>{
    return (
        <Context.Consumer>
            {
                (context) => (
                    <Fragment>
                        <h3>Heist Information</h3>
                        <p>Mission Name : {context.data.mname}</p>
                        <p>Agent Name : {context.data.agent}</p>
                        <p>Mission Status : {context.data.accept}</p>
                        <button onClick={context.isMissionAccepted}>Click to Accept</button>
                    </Fragment>
                )
            }
        </Context.Consumer>
    )
}

const ConsumerData = () => {
    return (
        <div>
            <h2>Context API Example !</h2>
            <Provider>
                <Agents></Agents>
            </Provider>
           
        </div>
    )
}

export default ConsumerData;