import React from 'react';
import Aprops from './Aprops';

const Props = ({name}) => {
    return (     
        <div>
            <h2>Props Practice !!!</h2>
            <Propsone name="Yuvraj" />
            <Propsone name="Maradona" />
            <Propstwo name="Messi" />
            <Propstwo name="Ronaldo" />
        </div>
    )
}

const Propsone = ({name}) => {
    return(
        <div>
            <p>Inside Props One : {name}</p>
        </div>
    )
}

const Propstwo = ({name}) => {
    return(
        <div>
            <p>Inside Props Two : {name}</p>
        </div>
    )
}


export default Props;