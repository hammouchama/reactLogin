import React,{useState} from "react";
import './App.css'
import Authe from "./log/logIn/Authe";
import Info from "./log/signUp/Info";

function App() {
    const [index,setIndex]=useState(1)
    return ( <div className = "App" >
      <div className="bloc-tabs">
        <button
          className={index === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => setIndex(1)}>
          Sign Up
        </button>
        <button
          className={index === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => setIndex(2)}>
        Log in
        </button>
      </div>
      <div className="content-tabs">
        <div
          className={index === 1 ? "content  active-content" : "content"}
        >
         <Info/>
        </div>

        <div className={index === 2 ? "content  active-content" : "content"}>
        <Authe/>
        </div>
        
      </div>
   
    
        </div>
    );  
}

export default App;