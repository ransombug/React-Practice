import React, { useState } from 'react'

const FetchAPITwo = () => {

    const [user, setUser] = useState([]);

    window.onload = () => {
        userData();
    }
     
    const userData = async () => {

        const url = 'https://jsonplaceholder.typicode.com/users';

        const response = await fetch(url);

        const data = await response.json();

        setUser(data);
        console.log("API 2 = ",data);
    }

    return (
        <div>
            <h1>Fetch API Example - 2</h1>
            <ul>
                {
                    user.map((item) => (
                        <li key={item.id}>
                                {item.name} || &nbsp;
                                {item.email}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FetchAPITwo;

// https://jsonplaceholder.typicode.com/users