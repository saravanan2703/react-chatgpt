import axios from "axios";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { Image } from 'react-native';

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  
  async function getResponse(e) 
  {
    setLoading(true);
    setResponse("");
    e.preventDefault();
    
    const inputData = {
      "apiKey": 'c2e3ca5d-8585-4603-815d-1354b082485e',
      "modelKey": '10a55a3c-76cd-4fd2-84e1-28f28f59bc63',
      "modelInputs": {'prompt':prompt}
    };

    axios.post('https://api.banana.dev/start/v4/', inputData)
    .then(response => {
      setResponse(response.data.modelOutputs[0].image_base64);
    })
    .catch(error => {
      console.log(error);
    });
  };
  //var myArray = response.split(',');


const divStyle = {
  color: 'white',
  fontSize: '24px'
};


  return (
    <div>
      <h2>Enter the Keyword to Search</h2>
      <div className="search-box">
        <form onSubmit={getResponse}>
        <input className="search-input" type="text" placeholder="Search something.." 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            />
        <button type="submit" className="btn">Submit</button>
        </form>
        
      </div>

    </div>
  );
}

export default App;
