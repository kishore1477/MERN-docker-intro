import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
function App() {
 const [appdata, setappdata] = useState('')

 const fetchData = async()=>{
  const url = 'https://5000-kishore3-reactexpresste-cz1xp3yqowh.ws-eu77.gitpod.io'
  // const res =  await fetch("https://5000-kishore3-reactexpresste-cz1xp3yqowh.ws-eu77.gitpod.io", {
  //   method:"GET",
   
  //    mode:'no-cors'
  //   })
  const  res = await axios.get(url)
  console.log("res.data", res.data.data)
  setappdata(res.data.data)
  console.log("appdata", appdata)
    console.log("res", res)
  // const  jsonData = await res.json()
  // console.log("jsondata", jsonData)

 }
 
  return (
    <div className="App">
     <button onClick={async()=> await fetchData()}> GET Data</button>

     {appdata && <><p> {appdata} </p></> }
    </div>
  );
}

export default App;
