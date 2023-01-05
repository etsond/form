// import the react and the REactDom lirbary

import React from "react";
import ReactDOM  from "react-dom/client";

// get the reference of the div with the id root
 const element = document.getElementById('root');
// tell react to take control of the element
const root = ReactDOM.createRoot(element);
// create a compoenet
function App(){
  const inputType = "tel";
  const quest = "Please enter your information below";
  const fname = "What is your name?";
  const lname = "What is you last name?";
  const faNumb = "Phone Number"

  
  
  return <div>
    <h1>{quest}</h1>
    
    <label>{fname}</label>
    <br />
    <input placeholder="first name"  />
    <br />
    <label>{lname}</label>
    <br />
    <input type="text" placeholder="last name" />
    <br />
    <label>{faNumb}</label>
    <br />
     <input type={inputType} placeholder="(000) - 000 - 0000" />
     <br />
    
     <button>submit</button>
  </div>

}
// show the component on the screen 
root.render(<App />)

