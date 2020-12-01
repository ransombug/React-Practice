import React from 'react'
import {uid} from 'react-uid';


const Aprops = () => {
    
    const list = ['list1','list2','list3','list4']
    return (
        <div>
            <ol>
               {
                list.map( x => ( <li key={uid(x)} >{x}</li> ) )
               }
            </ol>
        </div>
    )
}

export default Aprops;