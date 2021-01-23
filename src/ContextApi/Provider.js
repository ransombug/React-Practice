import React, {useState} from 'react';

import PackageContext from "./Context";
//PackageContext is a Variable which can be anything.

const Provider = Props => {
    
    const [mission, setMission] = useState({
         mname : "Money Heist",
         agent : "Professor",
        accept : "Not Accepted"

    })
    
    return(
        <PackageContext.Provider value={{
            data : mission,
            isMissionAccepted : () => {
                setMission({...mission,accept:"ACCEPTED"})
            }
        }}
        >
            {Props.children}
        </PackageContext.Provider>
    )
}

export default Provider;