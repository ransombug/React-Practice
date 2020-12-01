import React, {useState} from 'react';

const Toggle = () => {

    const [toggle, setToggle] = useState('India');

    return (
        <div>
            <h5>Country : {toggle}</h5>
            <button onClick={() => toggle==='india' ? setToggle('Pakistan') : setToggle('india')}>Toggle</button>
        </div>
    )
}

export default Toggle;