import React, { useState } from 'react'
import {Card, CardBody} from 'reactstrap';

const FetchAPI = () => {

    const [random, setRandom] = useState([]);
    
    window.onload = () => {                                    // This Code invokes the function when the browser loads
        randomUserGenerator();
    }

     const  randomUserGenerator = async () => {
         const url = 'https://randomuser.me/api/';

         const response = await fetch(url);                   //  console.log(response);
                
         const data = await response.json();                  // Convert the response we got into the JSON format in order to extract useful data.
         setRandom(data);
    }
                                                              // console.log("Data = ", random);
 
    return (
        <div>
            <hr></hr>
            <h1>Fetch API Example</h1>
            {/* <button onClick={() => randomUserGenerator()}>Click here</button> */}
            <Card className="text-center mt-3 mb-4">
                <CardBody>
                    Name :  <nobr> {random.results?.[0].name.first + " " + random.results?.[0].name.last} </nobr> <br></br>
                    Gender : <nobr> {random.results?.[0].gender} </nobr> <br></br>
                    Email : <nobr> {random.results?.[0].email} </nobr> <br></br>
                    Location : <nobr> {random.results?.[0].location.street.name} </nobr> <br></br>     
                </CardBody>
            </Card>
            
        </div>
    )
}

export default FetchAPI;


// https://randomuser.me/api/
