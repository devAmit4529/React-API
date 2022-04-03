import React, {useEffect,useState} from 'react';
import Axios from 'axios';

import './App.css';

function App() {
 
  // const [act, setAct] = useState("");
  
  // const getAct = () => {
  //   Axios.get("https://www.boredapi.com/api/activity").then(
  //     (response) => {
  //       console.log(response);
  //       setAct(
  //        "  Activity: " + response.data.activity +
  //        "  Type: "  + response.data.type +   
  //        "  Participants: "  + response.data.participants)
  //     }
  //   );
  // };

  // return (
  //   <div>
  //     <button onClick= {getAct}>I am bored ; Suggest me an activity</button>
  //     {act}
  //   </div>
  // );
  const [data, setData] = useState([]);
  
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then(
      response => {
        console.log(response.data);
        setData(response.data)
      }
    ) .catch(err => console.log(err))
  }, [])

  const arr=data.map((data,index) => {
    return(
      <tbody>
      <tr>
    <td style={{border: '1px solid black'}}>{data.id}</td>
    <td style={{border: '1px solid black'}}>{data.title}</td>
    <td style={{border: '1px solid black'}}>{data.body}</td>
  </tr>
  </tbody>
    )
  })
  return (
    <div>
      <table style={{border: '1px solid black'}}>
  <thead>
    <tr>
    <th style={{border: '1px solid black'}}>ID</th>
    <th style={{border: '1px solid black'}}>Title</th>
    <th style={{border: '1px solid black'}}>Body</th>
    </tr>
  </thead>
  {arr}
</table>
      {/* <button onClick= {getAct}>I am bored ; Suggest me an activity</button>
      {act} */}
    </div>
  );
}

export default App;
