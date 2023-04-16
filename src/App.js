// import logo from './logo.svg';
import "./App.css";
import Textarea from "./component/Textarea";
import Abouut from "./component/Abouut";
import Navbar from "./component/Navbar";
import { useState } from "react";

function App() {
  const[setlight,setdark]=useState('light')
  
  const toogleMode =() =>{
    console.log("clicked")
    if(setlight==='light'){
      setdark('dark')
      document.body.style.backgroundColor="#060620"
    }
    else{
      setdark('light')
      console.log("clicked")
      document.body.style.backgroundColor="white"
    }
  }
  return (
    <>
      <Navbar setlight={setlight} toogleMod={toogleMode} />
      <div className="container">
        <Textarea setlight={setlight} />
        <Abouut setlight={setlight}></Abouut>
      </div>
    </>
  );
}

export default App;
