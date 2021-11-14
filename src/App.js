import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea'

function App() {
	
  const [mode, setMode] = useState("light");
	
  const cmode = ()=>{
    if(mode === 'light'){
      setMode('dark');
	  document.body.style.backgroundColor = "black";
    }
    else{
      setMode('light');
	  document.body.style.backgroundColor = "white";
    }
  }
	
  return (
    <>
    <Navbar title="TextUtils" mode={mode} cmode={cmode} />
    <div className="container">
    <Textarea mode={mode} />
    </div>
    </>
  );
}

export default App;